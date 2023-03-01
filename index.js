import { S3 } from "@aws-sdk/client-s3";
const Region = "eu-west-2";
const s3 = new S3({ region: Region });
// const size = process.env.THUMBNAIL_SIZE;

export const s3_thumbnail_generator = async (event) => {
  // const eve = JSON.parse(event);
  // console.log(eve)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null, // Replacer (Says what you want to replace)
      2 // Indentation level
    ),
  };
};
