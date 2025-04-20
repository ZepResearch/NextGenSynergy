const PaymentInitiatedEmail = (data) => {
    const isAdmin = data.recipient === "admin"
    const currencySymbol = data.currency === "USD" ? "$" : "₹"
  
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${isAdmin ? "New Payment Initiated" : "Your NextGenSynergy Registration"}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            body {
              font-family: 'Inter', sans-serif;
              background-color: #0f172a;
              margin: 0;
              padding: 0;
              color: #e2e8f0;
            }
            
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            
            .logo {
              margin-bottom: 20px;
            }
            
            .title {
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 10px;
              color: #ffffff;
              background: linear-gradient(to right, #22d3ee, #d946ef);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              text-fill-color: transparent;
            }
            
            .card {
              background-color: #1e293b;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              border: 1px solid rgba(139, 92, 246, 0.3);
              box-shadow: 0 0 15px rgba(139, 92, 246, 0.2), 0 0 30px rgba(34, 211, 238, 0.1);
              position: relative;
              overflow: hidden;
            }
            
            .card::before {
              content: "";
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: linear-gradient(45deg, #22d3ee, #8b5cf6, #d946ef);
              border-radius: 14px;
              z-index: -1;
              filter: blur(10px);
              opacity: 0.5;
            }
            
            .section-title {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 15px;
              color: #a78bfa;
            }
            
            .detail-row {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
              padding-bottom: 10px;
              border-bottom: 1px solid rgba(139, 92, 246, 0.2);
            }
            
            .detail-row:last-child {
              border-bottom: none;
            }
            
            .detail-label {
              color: #a5b4fc;
              font-weight: 500;
            }
            
            .detail-value {
              color: #ffffff;
              font-weight: 600;
            }
            
            .highlight {
              background-color: #312e81;
              padding: 15px;
              border-radius: 8px;
              margin-top: 20px;
              border-left: 4px solid #818cf8;
            }
            
            .button {
              display: inline-block;
              background: linear-gradient(to right, #8b5cf6, #d946ef);
              color: white;
              font-weight: bold;
              padding: 12px 24px;
              border-radius: 8px;
              text-decoration: none;
              margin-top: 20px;
              text-align: center;
              box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
            }
            
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid rgba(139, 92, 246, 0.3);
              color: #94a3b8;
              font-size: 14px;
            }
            
            .grid-pattern {
              background-image: radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px);
              background-size: 20px 20px;
            }
          </style>
        </head>
        <body class="grid-pattern">
          <div class="container">
            <div class="header">
              <div class="logo">
                <img src="https://i.ibb.co/Qp1NKcZ/nextgensynergy-logo.png" alt="NextGenSynergy Logo" width="180" height="60">
              </div>
              <div class="title">
                ${isAdmin ? "New Registration Payment Initiated" : "Your Registration Payment Initiated"}
              </div>
            </div>
            
            <div class="card">
              <div class="section-title">Registration Details</div>
              
              <div class="detail-row">
                <span class="detail-label">Registration Type:</span>
                <span class="detail-value">${data.ticket_category} - ${data.ticket_name}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Order ID:</span>
                <span class="detail-value">${data.order_id}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Amount:</span>
                <span class="detail-value">${currencySymbol}${data.amount}</span>
              </div>
              
              ${
                isAdmin
                  ? `
              <div class="section-title" style="margin-top: 20px;">Registrant Information</div>
              
              <div class="detail-row">
                <span class="detail-label">Name:</span>
                <span class="detail-value">${data.billing_name}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value">${data.billing_email}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value">${data.billing_tel}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Organization:</span>
                <span class="detail-value">${data.billing_organization || "Not provided"}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Designation:</span>
                <span class="detail-value">${data.billing_designation || "Not provided"}</span>
              </div>
              
              <div class="detail-row">
                <span class="detail-label">Address:</span>
                <span class="detail-value">${data.billing_address}, ${data.billing_city}, ${data.billing_state}, ${
                  data.billing_zip
                }, ${data.billing_country}</span>
              </div>
              `
                  : `
              <div class="highlight">
                <p>Your payment is being processed. You will receive a confirmation email once the payment is complete.</p>
              </div>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://thenextgensynergy.com"}/schedule" class="button">View Conference Schedule</a>
              </div>
              `
              }
            </div>
            
            ${
              isAdmin
                ? `
            <div class="highlight">
              <p>This is a notification of a new registration payment. The payment is currently being processed by CCAvenue.</p>
            </div>
            `
                : `
            <div class="card">
              <div class="section-title">What's Next?</div>
              <p>Once your payment is confirmed, you will receive:</p>
              <ul>
                <li>A payment confirmation email with receipt</li>
                <li>Access instructions for the virtual platform (one week before the event)</li>
                <li>Conference materials and schedule information</li>
              </ul>
            </div>
            `
            }
            
            <div class="footer">
              <p>© ${new Date().getFullYear()} NextGenSynergy: The Virtual Interdisciplinary Forum</p>
              <p>For any questions, please contact <a href="mailto:info@thenextgensynergy.com" style="color: #22d3ee;">info@thenextgensynergy.com</a></p>
            </div>
          </div>
        </body>
      </html>
    `
  }
  
  export default PaymentInitiatedEmail
  