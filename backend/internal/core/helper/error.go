package helper

import "errors"

var NEWSLETTER_MAIL_ERROR = errors.New("could not send mail on newsletter subscription")
var CONTACT_MAIL_ERROR = errors.New("something went wrong, please try later")
