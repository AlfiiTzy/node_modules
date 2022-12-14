import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { LookupDeveloperIdentityInput, LookupDeveloperIdentityResponse } from "../models/models_0";
export interface LookupDeveloperIdentityCommandInput extends LookupDeveloperIdentityInput {
}
export interface LookupDeveloperIdentityCommandOutput extends LookupDeveloperIdentityResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the <code>IdentityID</code> associated with a
 *             <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code>
 *          values associated with an <code>IdentityId</code> for an existing identity. Either
 *             <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you
 *          supply only one of these values, the other value will be searched in the database and
 *          returned as a part of the response. If you supply both,
 *             <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If
 *          the values are verified against the database, the response returns both values and is the
 *          same as the request. Otherwise a <code>ResourceConflictException</code> is
 *          thrown.</p>
 *          <p>
 *             <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane
 *          operations: for example, to enable customer service to locate an identity ID by username.
 *          If you are using it for higher-volume operations such as user authentication, your requests
 *          are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a
 *          better option for higher-volume operations for user authentication.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, LookupDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, LookupDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new LookupDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LookupDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link LookupDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export declare class LookupDeveloperIdentityCommand extends $Command<LookupDeveloperIdentityCommandInput, LookupDeveloperIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: LookupDeveloperIdentityCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    constructor(input: LookupDeveloperIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LookupDeveloperIdentityCommandInput, LookupDeveloperIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
