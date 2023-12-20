import React from "react";
import PPNav from "./PPNav";
import "../Assets/PrivacyPolicy.css";
import Footer from "./Footer";
// import image from "../Assets/unused/pet2.jpg";

function PrivacyPolicy() {
  return (
    <>
      <div className="pp1">
        <PPNav />
        <div className="cd1">
          <p
            style={{
              color: "black",
              textDecoration: "underline",
              fontSize: "40px",
              fontStyle: "bold",
              fontWeight: "60px",
            }}
          >
            Privacy Policy
          </p>
          <h1 style={{ textDecoration: "underline" }}>Personal Information</h1>
          <div className="pi">
            <h3 style={{ fontWeight: "20px" }}>
              PAWS respects your privacy and has instituted policies intended to
              ensure that your personal information is handled in a safe and
              responsible manner. The ARL will NOT sell, rent or trade your
              name, mailing address and e-mail address to other organizations.
              The PAWS may disclose personal information if required to do so by
              law or in the good-faith belief that such action is necessary to
              conform to the edicts of the law or comply with legal process
              served on by the ARL or the site; (b) protect and defend the
              rights or property of the ARL, the site or the users of the site,
              and (c) act under exigent circumstances to protect the personal
              safety of users of the site or the public. By visiting this
              website you agree that no information you submit to the site will
              contain libelous or otherwise unlawful, abusive or obscene
              material. Please remember that you are solely responsible for the
              content of any information you provide to the PAWS.
            </h3>
          </div>
          <h1 style={{ textDecoration: "underline" }}>
            Link to Other Websites
          </h1>
          <div className="pi">
            <h3 style={{ fontWeight: "20px" }}>
              PAWS site contains links to other sites including external
              websites. The privacy practices may differ from these other sites.
              Make sure you educate yourself on the other sites' policies before
              providing personal information. PAWS is not responsible for the
              privacy practices or the content of external websites of any
              website linked from this site. Your use of any linked website is
              solely at your own risk.
            </h3>
          </div>
          <h1 style={{ textDecoration: "underline" }}>Children</h1>
          <div className="pi">
            <h3 style={{ fontWeight: "20px" }}>
              Be sure to ask your parents for permission before you send any
              information about yourself over the Internet, such as your name,
              address, phone number, or e-mail address. Never buy anything
              online without permission.
            </h3>
          </div>
          <h1 style={{ textDecoration: "underline" }}>
            Fundraising Appeals/Donations
          </h1>
          <div className="pi">
            <h3 style={{ fontWeight: "20px" }}>
              New and continuing donors of the ARL may inform the ARL at any
              time via written notice that they do not want their name and
              address shared outside the ARL organization. The ARL will not
              share or sell donor information collected offline or online. The
              ARL’s policy is such that no information related to ARL donors is
              shared with any outside entity unless compelled by law.
            </h3>
          </div>
          <h1 style={{ textDecoration: "underline" }}>
            Changes To This Policy/Modifications
          </h1>
          <div className="pi">
            <h3 style={{ fontWeight: "20px" }}>
              This Privacy Policy may be modified or amended from time to time,
              so check back often. Any changes will not be retroactive. We
              maintain the option to modify this privacy policy at any time.
              Your continued use of our website after the date that such changes
              are made will be deemed to be your agreement to the changed terms.
              If you have questions about this privacy statement, the practices
              of this website, or your dealings with this site, e-mail us.
            </h3>
          </div>
          <h1 style={{ textDecoration: "underline" }}>Disclaimer</h1>
          <div className="pi">
            <h3 style={{ fontWeight: "20px" }}>
              Any information posted on the PAWS website is for general
              information purposes only and should not be construed as medical
              advice, medical opinion, diagnosis or treatment. Any information
              provided by the PAW is not a substitute for medical attention. See
              your licensed veterinary health care professional for medical
              advice and treatment for your pet. The ARL reserves the right, in
              its sole discretion and without any obligation, to modify or
              correct any error or omission in any portion of this website. This
              site and all of the materials on or referenced by the site are
              provided on an "as is" basis, without warranties of any type and
              the ARL expressly disclaims any and all warranties, express or
              implied, including without limitation warranties of
              merchantability and fitness for a particular purpose, with respect
              to any materials and products. In no event shall the ARL be liable
              for any direct, indirect, incidental, punitive, or consequential
              damages of any kind whatsoever with respect to the use of this
              site. You agree that you are using this site solely at your own
              risk.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
