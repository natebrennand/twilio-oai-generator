/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using Twilio.Base;
using Twilio.Clients;
using Twilio.Converters;
using Twilio.Exceptions;
using Twilio.Http;
using Twilio.Types;


namespace Twilio.Rest.Api.V2010.Account.Call
{
    public class FeedbackCallSummaryResource : Resource
    {
    
        [JsonConverter(typeof(StringEnumConverter))]
        public sealed class StatusEnum : StringEnum
        {
            private StatusEnum(string value) : base(value) {}
            public StatusEnum() {}
            public static implicit operator StatusEnum(string value)
            {
                return new StatusEnum(value);
            }

            public static readonly StatusEnum InProgress = new StatusEnum("in-progress");
            public static readonly StatusEnum Paused = new StatusEnum("paused");
            public static readonly StatusEnum Stopped = new StatusEnum("stopped");
            public static readonly StatusEnum Processing = new StatusEnum("processing");
            public static readonly StatusEnum Completed = new StatusEnum("completed");
            public static readonly StatusEnum Absent = new StatusEnum("absent");
        }

        
        private static Request BuildUpdateRequest(UpdateFeedbackCallSummaryOptions options, ITwilioRestClient client)
        {
            
            string path = "/2010-04-01/Accounts/{AccountSid}/Calls/Feedback/Summary/{Sid}.json";

            string PathAccountSid = options.PathAccountSid ?? client.AccountSid;
            path = path.Replace("{"+"AccountSid"+"}", PathAccountSid);
            string PathSid = options.PathSid;
            path = path.Replace("{"+"Sid"+"}", PathSid);

            return new Request(
                HttpMethod.Post,
                Rest.Domain.Api,
                path,
                postParams: options.GetParams(),
                headerParams: null
            );
        }

        /// <summary> update </summary>
        /// <param name="options"> Update FeedbackCallSummary parameters </param>
        /// <param name="client"> Client to make requests to Twilio </param>
        /// <returns> A single instance of FeedbackCallSummary </returns>
        public static FeedbackCallSummaryResource Update(UpdateFeedbackCallSummaryOptions options, ITwilioRestClient client = null)
        {
            client = client ?? TwilioClient.GetRestClient();
            var response = client.Request(BuildUpdateRequest(options, client));
            return FromJson(response.Content);
        }

        /// <summary> update </summary>
        /// <param name="options"> Update FeedbackCallSummary parameters </param>
        /// <param name="client"> Client to make requests to Twilio </param>
        /// <returns> Task that resolves to A single instance of FeedbackCallSummary </returns>
        #if !NET35
        public static async System.Threading.Tasks.Task<FeedbackCallSummaryResource> UpdateAsync(UpdateFeedbackCallSummaryOptions options,
                                                                                                          ITwilioRestClient client = null)
        {
            client = client ?? TwilioClient.GetRestClient();
            var response = await client.RequestAsync(BuildUpdateRequest(options, client));
            return FromJson(response.Content);
        }
        #endif

        /// <summary> update </summary>
        /// <param name="pathSid">  </param>
        /// <param name="endDate">  </param>
        /// <param name="startDate">  </param>
        /// <param name="pathAccountSid">  </param>
        /// <param name="accountSid">  </param>
        /// <param name="client"> Client to make requests to Twilio </param>
        /// <returns> A single instance of FeedbackCallSummary </returns>
        public static FeedbackCallSummaryResource Update(
                                          string pathSid,
                                          DateTime? endDate,
                                          DateTime? startDate,
                                          string pathAccountSid = null,
                                          string accountSid = null,
                                          ITwilioRestClient client = null)
        {
            var options = new UpdateFeedbackCallSummaryOptions(pathSid, endDate, startDate){ PathAccountSid = pathAccountSid, AccountSid = accountSid };
            return Update(options, client);
        }

        #if !NET35
        /// <summary> update </summary>
        /// <param name="pathSid">  </param>
        /// <param name="endDate">  </param>
        /// <param name="startDate">  </param>
        /// <param name="pathAccountSid">  </param>
        /// <param name="accountSid">  </param>
        /// <param name="client"> Client to make requests to Twilio </param>
        /// <returns> Task that resolves to A single instance of FeedbackCallSummary </returns>
        public static async System.Threading.Tasks.Task<FeedbackCallSummaryResource> UpdateAsync(
                                                                              string pathSid,
                                                                              DateTime? endDate,
                                                                              DateTime? startDate,
                                                                              string pathAccountSid = null,
                                                                              string accountSid = null,
                                                                              ITwilioRestClient client = null)
        {
            var options = new UpdateFeedbackCallSummaryOptions(pathSid, endDate, startDate){ PathAccountSid = pathAccountSid, AccountSid = accountSid };
            return await UpdateAsync(options, client);
        }
        #endif
    
        /// <summary>
        /// Converts a JSON string into a FeedbackCallSummaryResource object
        /// </summary>
        /// <param name="json"> Raw JSON string </param>
        /// <returns> FeedbackCallSummaryResource object represented by the provided JSON </returns>
        public static FeedbackCallSummaryResource FromJson(string json)
        {
            try
            {
                return JsonConvert.DeserializeObject<FeedbackCallSummaryResource>(json);
            }
            catch (JsonException e)
            {
                throw new ApiException(e.Message, e);
            }
        }

    
        ///<summary> The account_sid </summary> 
        [JsonProperty("account_sid")]
        public string AccountSid { get; private set; }

        ///<summary> The sid </summary> 
        [JsonProperty("sid")]
        public string Sid { get; private set; }

        ///<summary> The test_string </summary> 
        [JsonProperty("test_string")]
        public string TestString { get; private set; }

        ///<summary> The test_integer </summary> 
        [JsonProperty("test_integer")]
        public int? TestInteger { get; private set; }

        ///<summary> The test_object </summary> 
        [JsonProperty("test_object")]
        public PhoneNumberCapabilities TestObject { get; private set; }

        ///<summary> The test_date_time </summary> 
        [JsonProperty("test_date_time")]
        public DateTime? TestDateTime { get; private set; }

        ///<summary> The test_number </summary> 
        [JsonProperty("test_number")]
        public decimal? TestNumber { get; private set; }

        ///<summary> The price_unit </summary> 
        [JsonProperty("price_unit")]
        public string PriceUnit { get; private set; }

        ///<summary> The test_number_float </summary> 
        [JsonProperty("test_number_float")]
        public float? TestNumberFloat { get; private set; }

        ///<summary> The test_number_decimal </summary> 
        [JsonProperty("test_number_decimal")]
        public decimal? TestNumberDecimal { get; private set; }

        
        [JsonProperty("test_enum")]
        public FeedbackCallSummaryResource.StatusEnum TestEnum { get; private set; }

        ///<summary> A2P Messaging Profile Bundle BundleSid </summary> 
        [JsonProperty("a2p_profile_bundle_sid")]
        public string A2PProfileBundleSid { get; private set; }

        ///<summary> The test_array_of_integers </summary> 
        [JsonProperty("test_array_of_integers")]
        public List<int?> TestArrayOfIntegers { get; private set; }

        ///<summary> The test_array_of_array_of_integers </summary> 
        [JsonProperty("test_array_of_array_of_integers")]
        public List<List<int?>> TestArrayOfArrayOfIntegers { get; private set; }

        ///<summary> The test_array_of_objects </summary> 
        [JsonProperty("test_array_of_objects")]
        public List<FeedbackIssue> TestArrayOfObjects { get; private set; }

        ///<summary> Permissions authorized to the app </summary> 
        [JsonProperty("test_array_of_enum")]
        public List<FeedbackCallSummaryResource.StatusEnum> TestArrayOfEnum { get; private set; }



        private FeedbackCallSummaryResource() {

        }
    }
}

