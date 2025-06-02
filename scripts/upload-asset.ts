#!/usr/bin/env node

import "dotenv/config";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { readFileSync, statSync } from "fs";
import { basename } from "path";

// Hardcoded S3 bucket name
const BUCKET_NAME = "assets";

// AWS S3 client configuration
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://199eb4e86b9aa7df2da0adba3df29a6f.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
  requestChecksumCalculation: "WHEN_REQUIRED",
  responseChecksumValidation: "WHEN_REQUIRED",
});

async function uploadFile(filePath: string): Promise<void> {
  try {
    // Check if file exists and get stats
    const stats = statSync(filePath);
    if (!stats.isFile()) {
      console.error(`Error: ${filePath} is not a file`);
      process.exit(1);
    }

    console.log(`Uploading ${filePath} to S3 bucket: ${BUCKET_NAME}`);
    console.log(`File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);

    // Read file content
    const fileContent = readFileSync(filePath);

    // Use the original filename as the S3 key
    const key = basename(filePath);

    // Create upload command
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: fileContent,
      ContentLength: stats.size,
    });

    // Upload file
    const response = await s3Client.send(command);

    console.log("✅ Upload successful!");
    console.log(`S3 Key: ${key}`);
    console.log(`ETag: ${response.ETag}`);
    console.log(`URL: https://${BUCKET_NAME}.s3.amazonaws.com/${key}`);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("ENOENT")) {
        console.error(`Error: File not found - ${filePath}`);
      } else if (error.message.includes("NoSuchBucket")) {
        console.error(`Error: S3 bucket '${BUCKET_NAME}' does not exist`);
      } else if (error.message.includes("AccessDenied")) {
        console.error("Error: Access denied. Check your AWS credentials and bucket permissions");
      } else {
        console.error(`Error uploading file: ${error.message}`);
      }
    } else {
      console.error("An unknown error occurred");
    }
    process.exit(1);
  }
}

function showUsage(): void {
  console.log("Usage: node upload.js <file-path>");
  console.log("");
  console.log("Example:");
  console.log("  node upload.js ./document.pdf");
  console.log("  node upload.js /path/to/image.jpg");
  console.log("");
  console.log("Environment variables:");
  console.log("  AWS_REGION - AWS region (default: us-east-1)");
  console.log("  AWS_ACCESS_KEY_ID - AWS access key");
  console.log("  AWS_SECRET_ACCESS_KEY - AWS secret key");
}

// Main execution
function main(): void {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Error: No file path provided");
    console.log("");
    showUsage();
    process.exit(1);
  }

  if (args[0] === "--help" || args[0] === "-h") {
    showUsage();
    process.exit(0);
  }

  const filePath = args[0];
  uploadFile(filePath);
}

// Run the script
main();
