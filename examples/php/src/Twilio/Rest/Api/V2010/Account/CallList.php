<?php

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

namespace Twilio\Rest\Api\V2010\Account;

use Twilio\Exceptions\TwilioException;
use Twilio\ListResource;
use Twilio\InstanceResource;
use Twilio\Options;
use Twilio\Stream;
use Twilio\Values;
use Twilio\Version;
use Twilio\InstanceContext;
use Twilio\Deserialize;
use Twilio\Serialize;
use Twilio\Rest\Api\V2010\Account\Call\FeedbackCallSummaryList;


/**
 * @property FeedbackCallSummaryList $feedbackCallSummary
 * @method \Twilio\Rest\Api\V2010\Account\Call\FeedbackCallSummaryContext feedbackCallSummary(string $sid)
 */

class CallList extends ListResource {
    protected $_feedbackCallSummary = null;

    /**
     * Construct the CallList
     *
     * @param Version $version Version that contains the resource
     * @param string $accountSid 
     */
    public function __construct(Version $version, string $accountSid ) {
        parent::__construct($version);

        // Path Solution
        $this->solution = ['accountSid' => $accountSid, ];

        $this->uri = '/Accounts/' . \rawurlencode($accountSid) . '/Calls.json';
    }

    /**
     * Create the CallInstance
     *
     * @param string $requiredStringProperty 
     * @param string $testMethod The HTTP method that we should use to request the &#x60;TestArrayOfUri&#x60;.
     * @param array|Options $options Optional Arguments
     * @return CallInstance Created CallInstance
     * @throws TwilioException When an HTTP error occurs.
     */
    public function create(string $requiredStringProperty, string $testMethod, array $options = []): CallInstance {
        $options = new Values($options);

        $data = Values::of([
            'RequiredStringProperty' => $requiredStringProperty,
            'TestMethod' => $testMethod,
            'TestArrayOfStrings' => Serialize::map($options['testArrayOfStrings'], function($e) { return $e; }),
            'TestArrayOfUri' => Serialize::map($options['testArrayOfUri'], function($e) { return $e; }),
        ]);

        $payload = $this->version->create('POST', $this->uri, [], $data);

        return new CallInstance(
            $this->version,
            $payload
            , $this->solution['accountSid']
        );
    }

    /**
     * Constructs a CallContext
     *
     * @param int $testInteger INTEGER ID param!!!
     */
    public function getContext(int $testInteger): CallContext {
        return new CallContext($this->version, $this->solution['accountSid'], $testInteger);
    }

    /**
     * Access the feedbackCallSummary
     */
    protected function getFeedbackCallSummary(): FeedbackCallSummaryList {
        if (!$this->_feedbackCallSummary) {
            $this->_feedbackCallSummary = new FeedbackCallSummaryList(
                $this->version
                , $this->solution['accountSid']
            );
        }

        return $this->_feedbackCallSummary;
    }

    /**
     * Magic getter to lazy load subresources
     *
     * @param string $name Subresource to return
     * @return ListResource The requested subresource
     * @throws TwilioException For unknown subresources
     */
    public function __get(string $name): ListResource {
        if (\property_exists($this, '_' . $name)) {
            $method = 'get' . \ucfirst($name);
            return $this->$method();
        }

        throw new TwilioException('Unknown subresource ' . $name);
    }

    /**
     * Magic caller to get resource contexts
     *
     * @param string $name Resource to return
     * @param array $arguments Context parameters
     * @return InstanceContext The requested resource context
     * @throws TwilioException For unknown resource
     */
    public function __call(string $name, array $arguments): InstanceContext {
        $property = $this->$name;
        if (\method_exists($property, 'getContext')) {
            return \call_user_func_array(array($property, 'getContext'), $arguments);
        }

        throw new TwilioException('Resource does not have a context');
    }

    /**
     * Provide a friendly representation
     *
     * @return string Machine friendly representation
     */
    public function __toString(): string {
        return '[Twilio.Api.V2010.CallList]';
    }
}
