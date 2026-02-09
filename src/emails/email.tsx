import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Img,
  Row,
  Column,
  Link,
} from "@react-email/components";

const IMAGES = {
  logo: "https://res.cloudinary.com/dowv4fs9p/image/upload/v1770639241/vegatem-logo_pdwmiq.webp",
};

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
          margin: 0,
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
          {/* HEADER */}
          <Section
            style={{
              backgroundColor: "#1f2937",
              padding: "32px 40px",
              textAlign: "center",
            }}
          >
            <Img
              src={IMAGES.logo}
              alt="Vegatem"
              width={140}
              height={40}
              style={{ margin: "0 auto", display: "block" }}
            />

            <Heading
              style={{
                color: "#ffffff",
                fontSize: "28px",
                fontWeight: "bold",
                margin: "16px 0 8px 0",
                letterSpacing: "-0.025em",
              }}
            >
              New Contact Form Submission
            </Heading>
          </Section>

          {/* Main content */}
          <Section style={{ padding: "40px" }}>
            <Section style={{ marginBottom: "32px" }}>
              <Text style={{ fontSize: "16px", color: "#374151" }}>
                Hi Vegatem,
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#374151",
                  marginTop: "12px",
                }}
              >
                A new enquiry was submitted with the following details:
              </Text>
            </Section>

            {/* Contact Info */}
            <Section
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "10px",
                padding: "28px",
                borderLeft: "4px solid #35A142",
                marginBottom: "32px",
              }}
            >
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "24px",
                }}
              >
                Contact Information
              </Text>

              <Row>
                <Column>
                  <Text>
                    <strong>Name:</strong> {name}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Text>
                    <strong>Email:</strong> {email}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Text>
                    <strong>Phone Number:</strong> {phone}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Text>
                    <strong>Organization:</strong> {organization}
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column>
                  <Text>
                    <strong>Area of Interest:</strong> {interest}
                  </Text>
                </Column>
              </Row>
            </Section>

            {message && (
              <Section style={{ marginBottom: "32px" }}>
                <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Message
                </Text>
                <Section
                  style={{
                    backgroundColor: "#f8fafc",
                    padding: "24px",
                    borderRadius: "10px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <Text style={{ fontStyle: "italic" }}>{message}</Text>
                </Section>
              </Section>
            )}

            <Section style={{ textAlign: "center" }}>
              <Text style={{ fontSize: "14px", color: "#6B7280" }}>
                This email was sent from your website&apos;s contact form.
              </Text>
            </Section>
          </Section>

          {/* FOOTER */}
          <Section
            style={{
              padding: "40px 40px 32px 40px",
              backgroundColor: "#00540A",
              textAlign: "center",
            }}
          >
            <Row style={{ justifyContent: "center", marginBottom: "16px" }}>
              <Column>
                <Link
                  href="https://x.com/vegatemgh"
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    margin: "0 12px",
                    textDecoration: "none",
                  }}
                >
                  X (Twitter)
                </Link>
                <Link
                  href="https://web.facebook.com/vegatemgh"
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    margin: "0 12px",
                    textDecoration: "none",
                  }}
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.instagram.com/vegatemgh/"
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    margin: "0 12px",
                    textDecoration: "none",
                  }}
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.youtube.com/@vegatemgh"
                  style={{
                    color: "#ffffff",
                    fontSize: "12px",
                    margin: "0 12px",
                    textDecoration: "none",
                  }}
                >
                  YouTube
                </Link>
              </Column>
            </Row>

            <Text style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px" }}>
              © {new Date().getFullYear()} Vegatem GH. All rights reserved.
            </Text>
          </Section>

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
