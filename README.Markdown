#	mono.twitterEngine

mono.twitterEngine is a wrapper to Twitter’s API.  It depends on `monoSnippets`.





##	Using `mono.twitterEngine`.

	var engine = mono.twitterEngine({
	
		associateWithAccount: "monoceroi",
		retrieve: "everything",
		delegate: delegateObject
	
	});

	var delegateObject = {
	
		twitterEngineDidConnect = function (sender) {
		
			mono.log(sender);		// Returns "mono.twitterEngine <monoceroi>"
			
		}
	
	}





##	Retrieval Scenario

*	Retrieve only particular tweets in a period

		retrieve: {
		
			tweetsNewerThanID: 1048576,
			tweetsOlderThanID: 1048576
		
		}


*	Report new tweets selectively.  If multiple predicates are given, a tweet must meet all the criterion to be reported by `mono.twitterEngine`.

		retrieve: {
		
			tweetsTagged: "blurry",
			tweetsMatching: [/ #news$/ig, /\d\d\d\d-\d\d/],
		
		}	





##	Retrieval Defaults

	retrieve: {
	
		tweetsFewerThan: 128,
		
		tweetsNewerThanID: undefined,
		tweetsOlderThanID: undefined,
		
		tweetsTagged: undefined,
		tweetsMatching: undefined
	
	}





##	Delegate Methods

*	`twitterEngineDidConnect` is fired whenever the engine connects.
*	`twitterEngineCouldNotConnect` is fired whenever the engine could not connect to Twitter.

*	`twitterEngineDidReceiveUpdate` is fired whenever the engine receives new, valid data.

*	`twitterEngineExhaustedUpdatesTemporarily` is fired whenever the engine exhausts current existing haulable data, but more data to be reported might be available in the future.

*	`twitterEngineExhaustedUpdates` is fired whenever all available data is exhausted.  This method is never called if both the upper and lower bounds (`tweetsNewerThanID` and `tweetsOlderThanID`) are not set.




