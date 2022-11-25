<?php

namespace Twilio\Rest\Accounts\V1\Credential;

use Twilio\Http\Response;
use Twilio\Page;
use Twilio\Version;

class HistoryPage extends Page {
    /**
    * @param Version $version Version that contains the resource
    * @param Response $response Response from the API
    * @param array $solution The context solution
    */
    public function __construct(Version $version, Response $response, array $solution) {
        parent::__construct($version, $response);

        // Path Solution
        $this->solution = $solution;
    }

    /**
    * @param array $payload Payload response from the API
    * @return AwsInstance \Twilio\Rest\FlexApi\V1\Credential\HistoryInstance
    */
    public function buildInstance(array $payload): AwsInstance {
        return new AwsInstance($this->version, $payload);
    }

    /**
    * Provide a friendly representation
    *
    * @return string Machine friendly representation
    */
    public function __toString(): string {
        return '[Twilio.FlexApi.V1.HistoryPage]';
    }
}
