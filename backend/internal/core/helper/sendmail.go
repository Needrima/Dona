package helper

import (
	"Dona/backend/internal/core/domain/entity"
	"bytes"
	"fmt"
	"net/smtp"
	"text/template"
)

// SendMail sends notification name from "from" to "to" using google smtp API
func SendMail(tempName string, data entity.EmailData) error {

	smtpHost := Config.SMTPHost
	smtpPort := Config.SMTPPort
	password := Config.SMTPPassword
	from := Config.SMTPUsername

	headers := map[string]string{
		"From":                from,
		"To":                  data.To,
		"Subject":             "Mail from Amirdeen",
		"MIME-Version":        "1.0",
		"Content-Type":        "text/html; charset=utf-8;",
		"Content-Disposition": "inline",
	}

	headerMessage := ""

	for header, value := range headers {
		headerMessage += fmt.Sprintf("%s: %s\r\n", header, value)
	}

	// if msg == "" {
	// 	msg = "welcome to DONA, we sell plain t-shirts of all colours for campaigns, company merch, e.t.c"
	// }

	msg, err := getMailBody(tempName, data)
	if err != nil {
		LogEvent("get mail body:", err.Error())
		return err
	}

	body := headerMessage + "\r\n" + msg

	auth := smtp.PlainAuth("", from, password, smtpHost)

	// Sending email.
	if err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, []string{data.To}, []byte(body)); err != nil {
		return err
	}

	return nil
}

func getMailBody(templateName string, data entity.EmailData) (string, error) {
	tpl := template.Must(template.ParseFiles("C:/Users/SAMSUNG/Documents/goworkspace/src/Dona/backend/internal/core/helper/email-templates/" + templateName))

	buf := &bytes.Buffer{}

	if err := tpl.Execute(buf, data); err != nil {
		return "", err
	}

	return buf.String(), nil
}
