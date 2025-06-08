#!/bin/bash

# === CONFIGURATION ===
BUCKET_NAME="floor-guru-landing"
BUILD_DIR="dist"
REGION="us-east-1"  # change this to your bucket's region
PROFILE="yonglai"   # or your named AWS CLI profile

# === CHECK AWS CLI ===
if ! command -v aws &> /dev/null; then
  echo "❌ AWS CLI not installed. Install it first."
  exit 1
fi

# === BUILD (Optional) ===
echo "⚙️  Building the site (npm run build)..."
npm run build || { echo "Build failed"; exit 1; }

# === DEPLOY TO S3 ===
echo "🚀 Deploying to S3 bucket: $BUCKET_NAME"
aws-vault exec $PROFILE -- aws s3 sync $BUILD_DIR s3://$BUCKET_NAME \
  --region $REGION \
  --delete

# === SET INDEX AND ERROR DOCUMENTS ===
echo "🔧 Updating bucket website configuration..."
aws-vault exec $PROFILE -- aws s3 website s3://$BUCKET_NAME/ \
  --index-document index.html \
  --error-document index.html

echo "✅ Deployment complete: https://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
