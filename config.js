import dotenv from "dotenv";
import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";
import NodeGeocoder from "node-geocoder";

dotenv.config();

export const DATABASE = process.env.DATABASE;

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_IDD;

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEYY;

export const EMAIL_FROM = process.env.EMAIL_FROM;
export const REPLY_TO = process.env.REPLY_TO;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const aswConfig = {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: "ap-northeast-1",
    apiVersion: "2010-12-01",
};

export const AWSSES = new SES(aswConfig);
export const AWSS3 = new S3(aswConfig);

const options = {
    provider: "google",
    apiKey: GOOGLE_API_KEY,
    formatter: null,
};
export const GOOGLE_GEOCODER = NodeGeocoder(options);

export const JWT_SECRET = process.env.JWT_SECRET;
export const CLIENT_URL = process.env.CLIENT_URL;
