const Twitter = require('twitter');
let twitterClient = null;

module.exports = function(context, req) {
  context.log(
    'JavaScript HTTP trigger function TwitterFunc processed a request.'
  );

  twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  if (req.query.feed === '/timeline') {
    twitterClient
      .get('statuses/user_timeline', {
        screen_name: null
      })
      .then(tweets => {
        context.log('statuses/user_timeline success');
        context.res = {
          status: 200,
          body: tweets
        };
        context.done();
      })
      .catch(error => {
        context.log('statuses/user_timeline error');
        context.res = {
          status: 500,
          body: error
        };
        context.done();
      });
  } else if (req.query.feed === '/favorites') {
    twitterClient
      .get('favorites/list', {
        screen_name: null
      })
      .then(tweets => {
        context.log('favorites/list success');
        context.res = {
          status: 200,
          body: tweets
        };
        context.done();
      })
      .catch(error => {
        context.log('favorites/list error');
        context.res = {
          status: 500,
          body: error
        };
        context.done();
      });
  } else {
    context.res = {
      status: 400,
      body:
        "Please pass a parameter 'timeline' or 'favorites' on the query string's 'feed' parameter"
    };
    context.done();
  }
};
