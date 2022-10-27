# IPFS Camp 2022

IPFS Camp 2022 is a gathering for the entire IPFS community: devs, operators, implementers, researchers – and you!

https://2022.ipfs.camp/

## IPFS Camp 2022 Location and Dates

IPFS Camp 2022 is happening October 28th to October 30th, at Convento do Beato in Lisbon, Portugal.

## Submitting subevents

There are 2 templates you can choose from to submit a subevent:
1. Use _template-short-event if your event doesn't have structured times throughout. It's short and sweet.
2. Use _template-long-event if your event has a lot of breakout times for different speakers, sessions, OR is going to be multiple days long. This template has timeslots you can fill out to let attendees know what to expect and when.

### Creating an Event

1. Select the short or long template depending on your event.
2. Create a new file and name it your-event-name.toml
3. Fill in the template with details for your event.
4. Create a PR to this repo to add this new file.
5. The IPFS Camp team will review and merge your event into the website. 

A quick note: If you are submitting an event that is private, it may not show up on the website since most attendees will not be able to attend. If you'd like it to appear in the schedule for some reason, please leave a comment in your PR for the IPFS Camp team to review.

### Editing an Event

If you've already created your event but want to add or change details in the .toml file, create a PR with your edit requests, along with any comments. The IPFS Camp team will review and merge your changes to the website.

### Adding Speaker Photos

To add speaker photos, create a PR with the following changes:
1. Add headshot image(s) to the `website/public/speakers` folder.
2. Update the [speakers section of devent.toml](https://github.com/pathfindertools/ipfs-camp-2022/blob/main/devent.toml#L149) with name, organization, and image filename.

Image files will be automatically compressed once your PR is created.

### CSV dump of talks

To get a dump of talks/speakers for custom analysis, you can:
1. Install the python version of yq: https://github.com/kislyuk/yq
  - ``brew install python-yq``
2. Run a command like ``tomlq -r '.name as $track_name | .date as $track_date | if has("timeslots") then .timeslots[] else empty end | if length > 0 then [$track_name, $track_date, .startTime, .title, (.speakers | join(" ")), .description] else empty end | @csv' *.toml``

The above was gleaned from:
1. https://stackoverflow.com/a/71290386/16318
2. https://stackoverflow.com/a/32967407/16318
3. https://stackoverflow.com/a/38693695/16318

## Developers

### What is `devent-website`?

It is a boilerplate starter website you can use to organize your own decentralized event.
Just clone the https://github.com/jbenet/devent-website repo,
edit `devent.toml`, change the layout and style to meet your needs,
and publish.

### What's `devent-website` built with?

- Next.js
- React
- Tailwind CSS
- Flowbyte CSS

So go look in their docs & tutorials if you run into trouble.

### Developing & Publishing the website

Develop:
```
cd website && npm run dev
```
Then visit: http://localhost:3000


Publish:
```
cd website
npm run build
npm run export
ipfs add -r out
```pop


Publish to fleek:
- https://blog.fleek.co/posts/fleek-nextJS

Additional notes:
- This repo is configured with build previews, which you can use to double-check your changes. After creating your PR, you should see "Show checks" > "fleek/build — Preview ready".
- Image files, such as speaker headshots, are automatically compressed upon merge.
- Merged PRs will automatically update the live website.
