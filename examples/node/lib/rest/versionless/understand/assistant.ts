/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Versionless
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Understand from "../Understand";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");

/**
 * Options to pass to create a AssistantInstance
 *
 * @property { string } [friendlyName]
 */
export interface AssistantListInstanceCreateOptions {
  friendlyName?: string;
}

export interface AssistantListInstance {
  /**
   * Create a AssistantInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  create(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  /**
   * Create a AssistantInstance
   *
   * @param { AssistantListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed AssistantInstance
   */
  create(
    params: AssistantListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  create(params?: any, callback?: any): Promise<AssistantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantSolution {}

interface AssistantListInstanceImpl extends AssistantListInstance {}
class AssistantListInstanceImpl implements AssistantListInstance {
  _version?: Understand;
  _solution?: AssistantSolution;
  _uri?: string;
}

export function AssistantListInstance(
  version: Understand
): AssistantListInstance {
  const instance = {} as AssistantListInstanceImpl;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Assistants`;

  instance.create = function create(
    params?: any,
    callback?: any
  ): Promise<AssistantInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AssistantInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

interface AssistantPayload extends AssistantResource {}

interface AssistantResource {
  account_sid?: string | null;
  friendly_name?: string | null;
  sid?: string | null;
}

export class AssistantInstance {
  constructor(protected _version: Understand, payload: AssistantPayload) {
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
  }

  /**
   * The unique SID that identifies this Account.
   */
  accountSid?: string | null;
  /**
   * A human readable description for this Fleet.
   */
  friendlyName?: string | null;
  /**
   * A string that uniquely identifies this Fleet.
   */
  sid?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      sid: this.sid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
