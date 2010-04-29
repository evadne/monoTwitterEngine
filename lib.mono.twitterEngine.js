//	mono.twitterEngine.Core.js
//	Evadne Wu at Iridia, 2010








mono.twitterEngine = function (destinationAccount, options) {
	
//	Dependency Check	
	
	if (!mono.preferencesController) return mono.die(mono.error("mono.twitterEngine is dependent on mono.preferencesController.  Bailing."));
	
	
	
	

//	Preference Stocking
	
	var _options = $.extend(options, {
	
		'listenFromAccount': undefined,

		'initalizeImmediately': true,
		
		'callbackOnUpdate': undefined,
		'callbackOnFailure': undefined,
		'callbackOnBackwardsFetchCompletion': undefined
	
	});
	
	var _pref = new mono.preferencesController;
	
	for (preferenceItemKey in _options)
	if (_options.hasOwnProperty(preferenceItemKey))
	_pref(preferenceItemKey, _options[preferenceItemKey]);
	
	delete _options;
	
	
	
	
	
	var _silo = {};
	
	var _bounds = {
	
		newestMessageIDToRetrieve: undefined,
		newestMessageID: undefined,
		oldestMessageID: undefined,
		oldestMessageIDToRetrieve: undefined
	
	}
	
	
	
	
	
//	Initializer

	this.init = function() {
	
		
		
	}
	
	if (_pref("initalizeImmediately")) this.init();
	
	
	
	
	
//	Message Stocking

	this.getMessageWithID = function(messageIdentifier) {
	
		return _silo[messageIdentifier];
		
	}
	
	_queueMessageWithID = function(messageIdentifier, messageObject) {
	
		if (!!_silo[messageIdentifier]) return mono.die(mono.log("Message with identifier", messageIdentifier, "is already queued so a new message object will not be queued."));
		
		_silo[messageIdentifier] = messageObject;
		
	}
	
	
	
	
	
//	API Requester

	this.fireAPIRequest = function(requestIdentifier, params, options) {
	
		options = $.extend(options, {
		
			callbackOnSuccess: undefined,
			callbackOnFailure: undefined
		
		});
		
	}
	
	
	
	
	
//	Workers	
	
	this.fetchMessagesNewerThanID =  function(messageIdentifier, options) {
	
		options = $.extend(options, {
		
			maximumCountOfMessages: undefined,
			callbackOnSuccess: undefined,
			callbackOnFailure: undefined
		
		});
		
	}
	
	this.fetchMessagesOlderThanID = function(messageIdentifier, options) {
	
		options = $.extend(options, {
		
			maximumCountOfMessages: undefined,
			callbackOnSuccess: undefined,
			callbackOnFailure: undefined
		
		});
		
	}
	
};