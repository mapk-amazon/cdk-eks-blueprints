import { createNamespace } from "../../utils";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { ClusterInfo } from "../../spi";
import { HelmAddOn, HelmAddOnUserProps } from "../helm-addon";

/**
 * Configuration options for the ExternalsSecrets add-on.
 */
export interface ExternalsSecretsAddOnProps extends HelmAddOnUserProps {
  /**
   * Iam policies for the add-on.
   */
  iamPolicies?: iam.PolicyStatement[];
}

/**
 * Default props for the add-on.
 */
const defaultProps: ExternalsSecretsAddOnProps = {
  name: "external-secrets",
  chart: "external-secrets",
  release: "blueprints-addon-external-secrets",
  version: "0.5.9",
  repository: "https://charts.external-secrets.io",
  namespace: "external-secrets",
  values: {},
};

/**
 * Default iam policy
 */
const defaultIamPolicy: iam.PolicyStatement = new iam.PolicyStatement({
  effect: iam.Effect.ALLOW,
  actions: [
    "secretsmanager:GetResourcePolicy",
    "secretsmanager:GetSecretValue",
    "secretsmanager:DescribeSecret",
    "secretsmanager:ListSecretVersionIds",
    "secretsmanager:ListSecrets",
  ],
  resources: ["*"],
});

/**
 * ExternalsSecretsAddOn deploys ExternalsSecrets into an EKS cluster using the `external-secrets` Helm chart.
 * https://github.com/external-secrets/external-secrets/
 *
 * For information on how to configure the `external-secrets` Helm chart, please view the values.yaml spec provided by the chart.
 * https://github.com/external-secrets/external-secrets/blob/main/deploy/charts/external-secrets/values.yaml
 */
export class ExternalsSecretsAddOn extends HelmAddOn {
  readonly options: ExternalsSecretsAddOnProps;

  constructor(props?: ExternalsSecretsAddOnProps) {
    super({ ...(defaultProps as any), ...props });
    this.options = this.props;
  }

  deploy(clusterInfo: ClusterInfo): Promise<Construct> {
    const cluster = clusterInfo.cluster;

    // Create the ExternalsSecrets namespace.
    const namespace = this.options.namespace;
    createNamespace(this.options.namespace!, cluster, true);

    // Create the ExternalsSecrets service account.
    const serviceAccountName = "external-secrets-sa";
    const sa = cluster.addServiceAccount(serviceAccountName, {
      name: serviceAccountName,
      namespace: namespace,
    });

    // Apply additional IAM policies to the service account.
    const policies = this.options.iamPolicies || [defaultIamPolicy];
    policies.forEach((policy: iam.PolicyStatement) =>
      sa.addToPrincipalPolicy(policy)
    );

    // Configure values.
    const values = {
      serviceAccount: {
        name: serviceAccountName,
        create: false,
      },
      ...this.options.values,
    };

    const helmChart = this.addHelmChart(clusterInfo, values);
    return Promise.resolve(helmChart);
  }
}
