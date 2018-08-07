# Add emoji reactions

Attach an emoji reaction to a message.

`POST {{ api_url }}/v1/messages/<message_id>/reactions`

## Usage examples

<div class="code-section" markdown="1">
<ul class="nav">
<li data-language="python">Python</li>
<li data-language="javascript">JavaScript</li>
<li data-language="curl">curl</li>
</ul>
<div class="blocks">

<div data-language="curl" markdown="1">

```
curl -X POST {{ api_url }}/v1/messages/<message_id>/reactions \
    -u BOT_EMAIL_ADDRESS:BOT_API_KEY \
    -d "emoji_name=thumbs_up" \
    -d "emoji_code=1f44d" \
    -d "reaction_type=unicode_emoji"
```

</div>

<div data-language="python" markdown="1">

{generate_code_example(python)|/messages/{message_id}/reactions:post|example}

</div>

<div data-language="javascript" markdown="1">
More examples and documentation can be found [here](https://github.com/zulip/zulip-js).
```js
const zulip = require('zulip-js');

// Download zuliprc-dev from your dev server
const config = {
    zuliprc: 'zuliprc-dev',
};

const reactionParams = {
    message_id: 42,
    emoji_name: 'thumbs_up',
    emoji_code: '1f44d',
    reaction_type: 'unicode_emoji',
};

zulip(config).then((client) => {
    // Add the "thumbs_up" emoji reaction to the message with ID 42
    return client.reactions.add(flagParams);
}).then(console.log);
```
</div>

</div>

</div>

## Arguments

{generate_api_arguments_table|zulip.yaml|/messages/{message_id}/reactions:post}

Please note that, even though `emoji_code` is optional, complete
implementations of Zulip's emoji reactions API need to send both `emoji_code`
and `emoji_name` in order to add a reaction.

This is to cover the corner cases in which a user reacts with an emoji reaction
that other user already added in the past, when the server had a different emoji
name-code mapping.

## Response

#### Example response

A typical successful JSON response may look like:

{generate_code_example|/messages/{message_id}/reactions:post|fixture(200)}

An example JSON response for when the user already reacted to that message with
the same emoji:

{generate_code_example|/messages/{message_id}/reactions:post|fixture(400)}
