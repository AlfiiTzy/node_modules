"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArnBucketName = exports.isDnsCompatibleBucketName = exports.S3_HOSTNAME_PATTERN = exports.DOT_PATTERN = exports.resolveParamsForS3 = void 0;
const resolveParamsForS3 = async (endpointParams) => {
    const bucket = (endpointParams === null || endpointParams === void 0 ? void 0 : endpointParams.Bucket) || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if ((0, exports.isArnBucketName)(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!(0, exports.isDnsCompatibleBucketName)(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
exports.resolveParamsForS3 = resolveParamsForS3;
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
exports.DOT_PATTERN = /\./;
exports.S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
exports.isDnsCompatibleBucketName = isDnsCompatibleBucketName;
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, region, account, typeOrId] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = [arn, partition, service, account, typeOrId].filter(Boolean).length === 5;
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return arn === "arn" && !!partition && !!service && !!account && !!typeOrId;
};
exports.isArnBucketName = isArnBucketName;
