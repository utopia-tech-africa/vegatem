import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Heading,
} from "@react-email/components";

export interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  organization: string;
  interest: string;
  message?: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  organization,
  interest,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Body
        style={{
          backgroundColor: "#f9fafb",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          padding: "20px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Header with gradient */}
          <Section
            style={{
              padding: "32px 40px",
              background: "linear-gradient(135deg, #35A142 0%, #2D8C3A 100%)",
            }}
          >
            <Heading
              style={{
                color: "#ffffff",
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0",
                textAlign: "center",
              }}
            >
              New Contact Form Submission
            </Heading>
            <Text
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              You have received a new inquiry through your contact form
            </Text>
          </Section>

          {/* Main content */}
          <Section
            style={{
              padding: "40px",
            }}
          >
            <Section
              style={{
                marginBottom: "32px",
              }}
            >
              <Text
                style={{
                  fontSize: "16px",
                  color: "#374151",
                  lineHeight: "1.6",
                }}
              >
                Hello,
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#374151",
                  lineHeight: "1.6",
                  marginTop: "12px",
                }}
              >
                A new enquiry was submitted with the following details:
              </Text>
            </Section>

            {/* Details Card */}
            <Section
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "8px",
                padding: "24px",
                borderLeft: "4px solid #35A142",
                marginBottom: "32px",
              }}
            >
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#111827",
                  marginBottom: "20px",
                }}
              >
                Contact Information
              </Text>

              <Section
                style={{
                  marginBottom: "4px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#6B7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Name
                </Text>
                <Text
                  style={{
                    fontSize: "16px",
                    color: "#111827",
                    margin: "0 0 16px 0",
                  }}
                >
                  {name}
                </Text>
              </Section>

              <Section
                style={{
                  marginBottom: "4px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#6B7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Email Address
                </Text>
                <Text
                  style={{
                    fontSize: "16px",
                    color: "#111827",
                    margin: "0 0 16px 0",
                  }}
                >
                  {email}
                </Text>
              </Section>

              <Section
                style={{
                  marginBottom: "4px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#6B7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Phone Number
                </Text>
                <Text
                  style={{
                    fontSize: "16px",
                    color: "#111827",
                    margin: "0 0 16px 0",
                  }}
                >
                  {phone}
                </Text>
              </Section>

              <Section
                style={{
                  marginBottom: "4px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#6B7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Organization
                </Text>
                <Text
                  style={{
                    fontSize: "16px",
                    color: "#111827",
                    margin: "0 0 16px 0",
                  }}
                >
                  {organization}
                </Text>
              </Section>

              <Section
                style={{
                  marginBottom: "4px",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#6B7280",
                    margin: "0 0 4px 0",
                  }}
                >
                  Area of Interest
                </Text>
                <Text
                  style={{
                    fontSize: "16px",
                    color: "#111827",
                    margin: "0 0 16px 0",
                    fontWeight: "500",
                  }}
                >
                  {interest}
                </Text>
              </Section>
            </Section>

            {/* Message Section */}
            {message && (
              <Section
                style={{
                  marginBottom: "32px",
                }}
              >
                <Text
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#111827",
                    marginBottom: "12px",
                  }}
                >
                  Message
                </Text>
                <Section
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "20px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "16px",
                      color: "#374151",
                      lineHeight: "1.6",
                      margin: "0",
                      fontStyle: "italic",
                    }}
                  >
                    "{message}"
                  </Text>
                </Section>
              </Section>
            )}

            <Hr
              style={{
                borderColor: "#e5e7eb",
                margin: "32px 0",
              }}
            />

            {/* Footer */}
            <Section
              style={{
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  margin: "0",
                }}
              >
                This email was sent from your website's contact form.
              </Text>
            </Section>
          </Section>

          {/* Bottom accent */}
          <Section
            style={{
              height: "4px",
              background: "linear-gradient(90deg, #35A142 0%, #2D8C3A 100%)",
            }}
          />
        </Container>
      </Body>
    </Html>
  );
}
