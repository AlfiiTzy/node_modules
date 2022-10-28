import { Profile } from "@aws-sdk/types";
/**
 * Cached SSO token retrieved from SSO login flow.
 */
export interface SSOToken {
    accessToken: string;
    expiresAt: string;
    region?: string;
    startUrl?: string;
}
/**
 * @internal
 */
export interface SsoProfile extends Profile {
    sso_start_url: string;
    sso_account_id: string;
    sso_region: string;
    sso_role_name: string;
}
