// Ref: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property
module.exports = {
	tables: [
		{
			TableName: `test-users`,
			KeySchema: [
				{
					AttributeName: "id",
					KeyType: "HASH",
				},
			],
			AttributeDefinitions: [
				{
					AttributeName: "id",
					AttributeType: "S",
				},
				{
					AttributeName: "userName",
					AttributeType: "S",
				}
			],
			ProvisionedThroughput: {
				ReadCapacityUnits: 1,
				WriteCapacityUnits: 1,
			},
			GlobalSecondaryIndexes: [
				{
					IndexName: "userName-index",
					Projection: {
						ProjectionType: "ALL",
					},
					ProvisionedThroughput: {
						WriteCapacityUnits: 1,
						ReadCapacityUnits: 1,
					},
					KeySchema: [
						{
							KeyType: "HASH",
							AttributeName: "userName",
						}
					],
				}
			],
		}
	],
};