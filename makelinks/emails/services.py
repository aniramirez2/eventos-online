import base64
import os

from datetime import datetime, timedelta

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import (Mail, Attachment,
                                   FileContent, FileName,
                                   FileType, Disposition,
                                   ContentId, To)

from ics import Calendar, Event, Attendee

from accounts.models import User


class EmailService():
    def __init__(self):
        self.serviceModelEmailMap = {
            'subject': 'subject',
            'html_content': 'content'
        }

        self.serviceModelAttachmentlMap = {
            'file_type': 'content_type',
            'html_content': 'content'
        }

    def notify(self, user, matches):
        for match in matches:
            match = User.objects.get(pk=match['match']['id'])
            self.send_email(user, match)
            # self.save_email(email)s

    def send_email(self, user, match):
        email = self.email(user, match)

        try:
            sendgrid_client = SendGridAPIClient(
                os.environ.get('SENDGRID_API_KEY'))
            sendgrid_client.send(email)

        except Exception as e:
            print(e)

    def save_email(self):
        pass

    def email(self, user, match):
        attendees = [user, match]

        ics = self.ics(attendees)

        attachment_fields = {
            'file_content': ics,
            'file_type': 'text/calendar',
            'file_name': 'invite.ics',
            'disposition': 'attachment'
        }

        email_fields = {
            'from_email': 'makelinksapp@gmail.com',
            'to_emails': [To(u.email, u.name) for u in attendees],
            'subject': '[makelinks] Schedule your meeting!',
            'html_content': '<h2>Hello, you\'ve bounded!<h2> <h3>Check the email attachment (invite.ics) and rearrange the meeting if needed.<h3>',
        }

        sendgrid_email = Mail(**email_fields)
        sendgrid_email.attachment = Attachment(**attachment_fields)

        return sendgrid_email

    def ics(self, attendees):
        begin = datetime.now() + timedelta(minutes=30)
        end = begin + timedelta(minutes=10)

        ics_fields = {
            'name': '[makelinks] Networking suggestion',
            'begin': begin.isoformat(),
            'end': end.isoformat(),
            'attendees': [u.email for u in attendees],
            'organizer': 'makelinksapp@gmail.com'
        }

        ics = Event(**ics_fields)
        ics = Calendar(events=[ics])
        ics = str(ics).encode('utf-8')
        ics = base64.b64encode(ics).decode('utf-8')

        return ics
