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

package com.twilio.rest.flexapi.v1.credential;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.twilio.base.Resource;
import com.twilio.converter.Converter;
import java.util.Currency;
import com.twilio.converter.DateConverter;
import com.twilio.converter.Promoter;
import com.twilio.converter.PrefixedCollapsibleMap;
import com.twilio.converter.CurrencyDeserializer;
import com.twilio.exception.ApiConnectionException;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import com.twilio.exception.ApiException;
import com.twilio.exception.RestException;
import com.twilio.http.HttpMethod;
import com.twilio.http.Request;
import com.twilio.http.Response;
import com.twilio.http.TwilioRestClient;
import com.twilio.rest.Domains;

import lombok.ToString;

import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.time.ZonedDateTime;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;


import java.util.Map;
import java.time.LocalDate;
import java.math.BigDecimal;
import com.twilio.type.PhoneNumberCapabilities;
import com.twilio.type.FeedbackIssue;
import com.twilio.type.IceServer;
import com.twilio.type.InboundCallPrice;
import com.twilio.type.OutboundPrefixPriceWithOrigin;
import com.twilio.type.OutboundPrefixPrice;
import com.twilio.type.OutboundCallPriceWithOrigin;
import com.twilio.type.PhoneNumberPrice;
import com.twilio.type.InboundSmsPrice;
import com.twilio.type.OutboundSmsPrice;
import com.twilio.type.OutboundCallPrice;
import com.twilio.type.RecordingRule;
import com.twilio.type.SubscribeRule;

@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
public class NewCredentials extends Resource {
    private static final long serialVersionUID = 234000032744450L;

    public static NewCredentialsCreator creator(final String testString, final Integer testInteger, final Float testNumberFloat){
        return new NewCredentialsCreator(testString, testInteger, testNumberFloat);
    }
    public static NewCredentialsCreator creator(final String testString, final Integer testInteger, final Map<String, Object> testObject){
        return new NewCredentialsCreator(testString, testInteger, testObject);
    }
    public static NewCredentialsCreator creator(final String testString, final LocalDate testDate, final Float testNumberFloat){
        return new NewCredentialsCreator(testString, testDate, testNumberFloat);
    }
    public static NewCredentialsCreator creator(final String testString, final LocalDate testDate, final Map<String, Object> testObject){
        return new NewCredentialsCreator(testString, testDate, testObject);
    }





    /**
    * Converts a JSON String into a NewCredentials object using the provided ObjectMapper.
    *
    * @param json Raw JSON String
    * @param objectMapper Jackson ObjectMapper
    * @return NewCredentials object represented by the provided JSON
    */
    public static NewCredentials fromJson(final String json, final ObjectMapper objectMapper) {
        // Convert all checked exceptions to Runtime
        try {
            return objectMapper.readValue(json, NewCredentials.class);
        } catch (final JsonMappingException | JsonParseException e) {
            throw new ApiException(e.getMessage(), e);
        } catch (final IOException e) {
            throw new ApiConnectionException(e.getMessage(), e);
        }
    }

    /**
    * Converts a JSON InputStream into a NewCredentials object using the provided
    * ObjectMapper.
    *
    * @param json Raw JSON InputStream
    * @param objectMapper Jackson ObjectMapper
    * @return NewCredentials object represented by the provided JSON
    */
    public static NewCredentials fromJson(final InputStream json, final ObjectMapper objectMapper) {
        // Convert all checked exceptions to Runtime
        try {
            return objectMapper.readValue(json, NewCredentials.class);
        } catch (final JsonMappingException | JsonParseException e) {
            throw new ApiException(e.getMessage(), e);
        } catch (final IOException e) {
            throw new ApiConnectionException(e.getMessage(), e);
        }
    }
    public enum Permissions {
        GET_ALL("get-all"),
        POST_ALL("post-all");

        private final String value;

        private Permissions(final String value) {
            this.value = value;
        }

        public String toString() {
            return value;
        }

        @JsonCreator
        public static Permissions forValue(final String value) {
            return Promoter.enumFromString(value, Permissions.values());
        }
    }
    public enum Status {
        IN_PROGRESS("in-progress"),
        PAUSED("paused"),
        STOPPED("stopped"),
        PROCESSING("processing"),
        COMPLETED("completed"),
        ABSENT("absent");

        private final String value;

        private Status(final String value) {
            this.value = value;
        }

        public String toString() {
            return value;
        }

        @JsonCreator
        public static Status forValue(final String value) {
            return Promoter.enumFromString(value, Status.values());
        }
    }

    private final String accountSid;
    private final String sid;
    private final String testString;
    private final Integer testInteger;

    @JsonCreator
    private NewCredentials(
        @JsonProperty("account_sid")
        final String accountSid,

        @JsonProperty("sid")
        final String sid,

        @JsonProperty("test_string")
        final String testString,

        @JsonProperty("test_integer")
        final Integer testInteger
    ) {
        this.accountSid = accountSid;
        this.sid = sid;
        this.testString = testString;
        this.testInteger = testInteger;
    }

        public final String getAccountSid() {
            return this.accountSid;
        }
        public final String getSid() {
            return this.sid;
        }
        public final String getTestString() {
            return this.testString;
        }
        public final Integer getTestInteger() {
            return this.testInteger;
        }

    @Override
    public boolean equals(final Object o) {
        if (this==o) {
            return true;
        }

        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        NewCredentials other = (NewCredentials) o;

        return Objects.equals(accountSid, other.accountSid) &&  Objects.equals(sid, other.sid) &&  Objects.equals(testString, other.testString) &&  Objects.equals(testInteger, other.testInteger)  ;
    }

    @Override
    public int hashCode() {
        return Objects.hash(accountSid, sid, testString, testInteger);
    }

}

