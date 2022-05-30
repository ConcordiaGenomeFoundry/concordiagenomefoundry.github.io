---
layout: page
title: Contact us
permalink: /contact/
---
<div class="row">
    <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.274156403949!2d-73.64867448806763!3d45.45696899788426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9172e70050287%3A0xc4df37b92817328e!2sCentre%20for%20Structural%20and%20Functional%20Genomics%20(GE)!5e0!3m2!1sen!2sca!4v1653612428712!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
<div class="row">
    <div class="col-6">
        <div class="contact-info-title">Contact Information</div>
        <div class="contact-info-text">genomefoundry@concordia.ca</div>
        <div class="contact-info-text">Phone: (514) 848-2424 ext. 2438</div>
        <div class="contact-info-text">Fax: (514) 848-4504</div>
    </div>
    <div class="col-6">
        <div class="contact-info-title">Contact Form</div>
        <form id="fs-frm" name="contact_form" accept-charset="utf-8" action="https://formspree.io/f/mknyyvrr" method="POST">
            <fieldset id="fs-frm-inputs">
                <label for="full-name"><div class="contact-info-text">Full Name</div></label>
                <input type="text" name="name" id="full-name" placeholder="" required="">
                <label for="email-address"><div class="contact-info-text">Email Address</div></label>
                <input type="email" name="_replyto" id="email-address" placeholder="" required="">
                <label for="email-subject"><div class="contact-info-text">Subject</div></label>
                <input type="text" name="subject" id="email-subject" placeholder="" required="">
                <label for="message"><div class="contact-info-text">Message</div></label>
                <textarea rows="5" name="message" id="message" placeholder="" required=""></textarea>
                <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
            </fieldset>
          <input type="submit" value="Send Message">
        </form>
    </div>
</div>
<style>/* reset */
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm fieldset,
#fs-frm optgroup,
#fs-frm label,
#fs-frm #card-element:disabled {
  font-family: inherit;
  font-size: 100%;
  color: inherit;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
}
#fs-frm label,
#fs-frm legend,
#fs-frm ::placeholder {
  font-size: .825rem;
  margin-bottom: .5rem;
  padding-top: .2rem;
  display: flex;
  align-items: baseline;
}
/* border, padding, margin, width */
#fs-frm input,
#fs-frm select,
#fs-frm textarea,
#fs-frm #card-element {
  border: 1px solid rgba(0,0,0,0.2);
  background-color: rgba(255,255,255,0.9);
  padding: .75em 1rem;
  margin-bottom: 1.5rem;
}
#fs-frm input:focus,
#fs-frm select:focus,
#fs-frm textarea:focus {
  background-color: white;
  outline-style: solid;
  outline-width: thin;
  outline-color: gray;
  outline-offset: -1px;
}
#fs-frm [type="text"],
#fs-frm [type="email"] {
  width: 100%;
}
#fs-frm [type="button"],
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  width: auto;
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
}
#fs-frm [type="button"]:focus,
#fs-frm [type="submit"]:focus,
#fs-frm [type="reset"]:focus {
  outline: none;
}
#fs-frm [type="submit"],
#fs-frm [type="reset"] {
  margin-bottom: 0;
}
#fs-frm select {
  text-transform: none;
}
#fs-frm [type="checkbox"] {
  -webkit-appearance: checkbox;
  -moz-appearance: checkbox;
  appearance: checkbox;
  display: inline-block;
  width: auto;
  margin: 0 .5em 0 0 !important;
}
#fs-frm [type="radio"] {
  -webkit-appearance: radio;
  -moz-appearance: radio;
  appearance: radio;
}
/* address, locale */
#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
  display: inline;
}
#fs-frm fieldset.locale input[name="city"] {
  width: 52%;
}
#fs-frm fieldset.locale select[name="state"],
#fs-frm fieldset.locale input[name="postal-code"] {
  width: 20%;
}
#fs-frm fieldset.locale input[name="city"],
#fs-frm fieldset.locale select[name="state"] {
  margin-right: 3%;
}
</style>