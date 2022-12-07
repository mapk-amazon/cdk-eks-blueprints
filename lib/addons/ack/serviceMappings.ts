export interface AckChartMapping {
    chart: string,
    version: string,
    managedPolicyName: string
}

export enum AckServiceName {
    IAM = "iam",
    RDS = "rds",
    EC2 = "ec2",
    S3 = "s3",
    DYNAMODB = "dynamodb",
    ECR = "ecr",
    SNS = "sns",
    APIGATEWAYV2 = "apigatewayv2",
    ELASTICACHE = "elasticache",
    OPENSEARCHSERVICE = "opensearchservice",
    MQ = "mq",
    LAMBDA = "lambda",
    KMS = "kms",
    MEMORYDB = "memorydb",
    EKS = "eks",
    APPLICATIONAUTOSCALING = "applicationautoscaling",
    ELASTICSEARCHSERVICE = "elasticsearchservice",
    PROMETHEUSSERVICE = "prometheusservice",
    EMRCONTAINERS = "emrcontainers",
    SFN = "sfn",
    KINESIS = "kinesis",
    CLOUDTRAIL = "cloudtrail"
};
  
export const serviceMappings : {[key in AckServiceName]?: AckChartMapping } = {
    [AckServiceName.IAM]: {
      chart: "iam-chart",
      version:  "v0.0.13",
      managedPolicyName: "IAMFullAccess"
    },
    [AckServiceName.RDS]: {
      chart: "rds-chart",
      version:  "v0.1.1",
      managedPolicyName: "AmazonRDSFullAccess"
    },
    [AckServiceName.EC2]: {
      chart: "ec2-chart",
      version:  "v0.1.0",
      managedPolicyName: "AmazonRDSFullAccess"
    },
    [AckServiceName.S3]: {
      chart: "s3-chart",
      version:  "v0.1.5",
      managedPolicyName: "AmazonS3FullAccess"
    },
    [AckServiceName.DYNAMODB]: {
      chart: "dynamodb-chart",
      version:  "v0.1.7",
      managedPolicyName: "AmazonDynamoDBFullAccess"
    },
    [AckServiceName.ECR]: {
      chart: "ecr-chart",
      version:  "v0.1.7",
      managedPolicyName: "AmazonEC2ContainerRegistryFullAccess"
    },
    [AckServiceName.SNS]: {
      chart: "sns-chart",
      version:  "v0.0.1",
      managedPolicyName: "AmazonSNSFullAccess"
    },
    [AckServiceName.APIGATEWAYV2]: {
      chart: "apigatewayv2-chart",
      version:  "v0.1.4",
      managedPolicyName: ""
    },
    [AckServiceName.ELASTICACHE]: {
      chart: "elasticache-chart",
      version:  "v0.0.20",
      managedPolicyName: ""
    },
    [AckServiceName.OPENSEARCHSERVICE]: {
      chart: "opensearchservice-chart",
      version:  "v0.0.14",
      managedPolicyName: ""
    },
    [AckServiceName.MQ]: {
      chart: "mq-chart",
      version:  "v0.0.23",
      managedPolicyName: ""
    },
    [AckServiceName.LAMBDA]: {
      chart: "lambda-chart",
      version:  "v0.1.3",
      managedPolicyName: ""
    },
    [AckServiceName.KMS]: {
      chart: "kms-chart",
      version:  "v0.1.3",
      managedPolicyName: ""
    },
    [AckServiceName.MEMORYDB]: {
      chart: "memorydb-chart",
      version:  "v0.0.3",
      managedPolicyName: ""
    },
    [AckServiceName.EKS]: {
      chart: "eks-chart",
      version:  "v0.1.7",
      managedPolicyName: ""
    },
    [AckServiceName.APPLICATIONAUTOSCALING]: {
      chart: "applicationautoscaling-chart",
      version:  "v0.2.14",
      managedPolicyName: ""
    },
    [AckServiceName.ELASTICSEARCHSERVICE]: {
      chart: "elasticsearchservice-chart",
      version:  "v0.0.2",
      managedPolicyName: ""
    },
    [AckServiceName.PROMETHEUSSERVICE]: {
      chart: "prometheusservice-chart",
      version:  "v0.1.1",
      managedPolicyName: ""
    },
    [AckServiceName.EMRCONTAINERS]: {
      chart: "emrcontainers-chart",
      version:  "v0.1.0",
      managedPolicyName: ""
    },
    [AckServiceName.SFN]: {
      chart: "sfn-chart",
      version:  "v0.1.2",
      managedPolicyName: ""
    },
    [AckServiceName.KINESIS]: {
      chart: "kinesis-chart",
      version:  "v0.0.1",
      managedPolicyName: ""
    },
    [AckServiceName.CLOUDTRAIL]: {
      chart: "cloudtrail-chart",
      version:  "v0.0.3",
      managedPolicyName: ""
    }

}
