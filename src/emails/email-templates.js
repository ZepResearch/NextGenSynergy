export function getUserEmailTemplate(data) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Paper Submission Confirmation</title>
    <style>
      body {
        font-family: 'Orbitron', 'Arial', sans-serif;
        line-height: 1.6;
        color: #e0f7fa;
        background-color: #0a0e17;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #0b132b 0%, #16213e 100%);
        color: #4df0ff;
        padding: 25px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        border: 1px solid #4df0ff;
        box-shadow: 0 0 15px rgba(77, 240, 255, 0.5);
      }
      .content {
        padding: 25px;
        border: 1px solid #4df0ff;
        border-top: none;
        border-radius: 0 0 15px 15px;
        background-color: #101828;
        box-shadow: 0 0 10px rgba(77, 240, 255, 0.3);
        color: #e0f7fa; /* Ensuring text color is light */
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #9eaccc; /* Lighter footer text color for better visibility */
      }
      h1 {
        color: #ff41b4;
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 0 0 10px rgba(255, 65, 180, 0.7);
      }
      .conference-title {
        font-size: 28px;
        font-weight: bold;
        color: #ff41b4;
        text-shadow: 0 0 10px rgba(255, 65, 180, 0.7);
      }
      .subtitle {
        color: #4df0ff;
        font-size: 18px;
        margin-top: 5px;
      }
      .highlight {
        font-weight: bold;
        color: #ff41b4;
        text-shadow: 0 0 5px rgba(255, 65, 180, 0.5);
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        padding: 8px 0;
        border-bottom: 1px solid #2a3c61;
        color: #e0f7fa; /* Ensuring list items are visible */
      }
      li:last-child {
        border-bottom: none;
      }
      li strong {
        color: #4df0ff;
        font-weight: bold;
        margin-right: 5px;
        display: inline-block;
        min-width: 120px;
      }
      a {
        color: #ff41b4;
        text-decoration: none;
      }
      a:hover {
        text-shadow: 0 0 8px rgba(255, 65, 180, 0.8);
      }
      .neon-button {
        display: inline-block;
        padding: 10px 20px;
        border: 1px solid #4df0ff;
        border-radius: 5px;
        background-color: rgba(77, 240, 255, 0.1);
        color: #4df0ff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 15px;
        transition: all 0.3s ease;
        text-align: center;
      }
      .neon-button:hover {
        background-color: rgba(77, 240, 255, 0.2);
        box-shadow: 0 0 15px rgba(77, 240, 255, 0.7);
      }
      p {
        color: #e0f7fa; /* Ensuring paragraph text is visible */
      }
      .detail-label {
        color: #4df0ff;
        font-weight: bold;
        margin-right: 5px;
        display: inline-block;
        min-width: 150px;
      }
      .detail-value {
        color: #ffffff;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="conference-title">NEXTGENSYNERGY</div>
      <div class="subtitle">The Virtual Interdisciplinary Forum</div>
    </div>
    <div class="content">
      <p>Dear ${data.author},</p>
      
      <p>Thank you for submitting your paper titled <span class="highlight">"${data.paper_title}"</span> to the NextGenSynergy: The Virtual Interdisciplinary Forum.</p>
      
      <p>We have received your submission and our review committee will evaluate it shortly. You will be notified about the status of your submission in the coming weeks.</p>
      
      <p>Here's a summary of your submission:</p>
      <ul>
        <li><span class="detail-label">Paper Title:</span> <span class="detail-value">${data.paper_title}</span></li>
        <li><span class="detail-label">Paper Type:</span> <span class="detail-value">${data.paper_type}</span></li>
        <li><span class="detail-label">Presentation Type:</span> <span class="detail-value">${data.presentation_type}</span></li>
        <li><span class="detail-label">Submission Date:</span> <span class="detail-value">${new Date().toLocaleDateString()}</span></li>
      </ul>
      
      <p>If you have any questions or need to make changes to your submission, please contact us at <a href="mailto:info@thenextgensynergy.com">info@thenextgensynergy.com</a>.</p>
      
      <p>Best regards,<br>
      NextGenSynergy Organizing Committee<br>
      The Virtual Interdisciplinary Forum</p>
      
      
    </div>
    <div class="footer">
      <p>© 2025 NextGenSynergy: The Virtual Interdisciplinary Forum. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}

export function getAdminEmailTemplate(data, fileUrl) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Paper Submission</title>
    <style>
      body {
        font-family: 'Orbitron', 'Arial', sans-serif;
        line-height: 1.6;
        color: #e0f7fa;
        background-color: #0a0e17;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #0b132b 0%, #16213e 100%);
        color: #4df0ff;
        padding: 25px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        border: 1px solid #4df0ff;
        box-shadow: 0 0 15px rgba(77, 240, 255, 0.5);
      }
      .content {
        padding: 25px;
        border: 1px solid #4df0ff;
        border-top: none;
        border-radius: 0 0 15px 15px;
        background-color: #101828;
        box-shadow: 0 0 10px rgba(77, 240, 255, 0.3);
        color: #e0f7fa; /* Ensuring text color is light */
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #9eaccc; /* Lighter footer text color */
      }
      h1, h2 {
        color: #ff41b4;
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 0 0 10px rgba(255, 65, 180, 0.7);
      }
      .conference-title {
        font-size: 28px;
        font-weight: bold;
        color: #ff41b4;
        text-shadow: 0 0 10px rgba(255, 65, 180, 0.7);
      }
      .subtitle {
        color: #4df0ff;
        font-size: 18px;
        margin-top: 5px;
      }
      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        margin: 20px 0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(77, 240, 255, 0.3);
      }
      table, th, td {
        border: 1px solid #2a3c61;
      }
      th, td {
        padding: 12px 15px;
        text-align: left;
      }
      th {
        background-color: #162447;
        color: #4df0ff;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
      }
      td {
        color: #ffffff; /* Making sure table data is visible */
      }
      tr:nth-child(even) {
        background-color: #0d1524;
      }
      tr:nth-child(odd) {
        background-color: #111c30;
      }
      tr:hover {
        background-color: #1a2948;
      }
      .file-link {
        color: #ff41b4;
        text-decoration: none;
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #ff41b4;
        border-radius: 5px;
        transition: all 0.3s ease;
        background-color: rgba(255, 65, 180, 0.1);
      }
      .file-link:hover {
        background-color: rgba(255, 65, 180, 0.2);
        box-shadow: 0 0 10px rgba(255, 65, 180, 0.5);
      }
      .action-buttons {
        text-align: center;
        margin-top: 20px;
      }
      .action-button {
        display: inline-block;
        padding: 10px 20px;
        margin: 0 10px;
        border: 1px solid #4df0ff;
        border-radius: 5px;
        background-color: rgba(77, 240, 255, 0.1);
        color: #4df0ff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
      }
      .action-button:hover {
        background-color: rgba(77, 240, 255, 0.2);
        box-shadow: 0 0 15px rgba(77, 240, 255, 0.7);
      }
      .action-button.reject {
        border-color: #ff3860;
        color: #ff3860;
        background-color: rgba(255, 56, 96, 0.1);
      }
      .action-button.reject:hover {
        background-color: rgba(255, 56, 96, 0.2);
        box-shadow: 0 0 15px rgba(255, 56, 96, 0.7);
      }
      p {
        color: #e0f7fa; /* Ensuring paragraph text is visible */
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="conference-title">NEXTGENSYNERGY</div>
      <div class="subtitle">New Paper Submission Alert</div>
    </div>
    <div class="content">
      <p>A new paper has been submitted to the NextGenSynergy: The Virtual Interdisciplinary Forum.</p>
      
      <h2>Submission Details:</h2>
      <table>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Author</td>
          <td>${data.author}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${data.email}</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>${data.phone_number}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>${data.country}</td>
        </tr>
        <tr>
          <td>Co-Author</td>
          <td>${data.co_author}</td>
        </tr>
        <tr>
          <td>Paper Title</td>
          <td>${data.paper_title}</td>
        </tr>
        <tr>
          <td>Department</td>
          <td>${data.department}</td>
        </tr>
        <tr>
          <td>Organization</td>
          <td>${data.organization}</td>
        </tr>
        <tr>
          <td>Paper Type</td>
          <td>${data.paper_type}</td>
        </tr>
        <tr>
          <td>Presentation Type</td>
          <td>${data.presentation_type}</td>
        </tr>
        <tr>
          <td>Message</td>
          <td>${data.message}</td>
        </tr>
        <tr>
          <td>How they heard about us</td>
          <td>${data.know_to_you}</td>
        </tr>
        <tr>
          <td>Submission Date</td>
          <td>${new Date().toLocaleDateString()}</td>
        </tr>
        ${
          fileUrl
            ? `
        <tr>
          <td>Uploaded File</td>
          <td><a href="${fileUrl}" class="file-link">View/Download File</a></td>
        </tr>
        `
            : ""
        }
      </table>
      
      <p>Please review this submission at your earliest convenience.</p>
      
      
    </div>
    <div class="footer">
      <p>© 2025 NextGenSynergy: The Virtual Interdisciplinary Forum. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}