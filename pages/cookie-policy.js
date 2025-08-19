import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const CookiePolicy = () => {
  const { language } = useLanguage();

  const pageTitle = language === 'en' 
    ? 'Cookie Policy - PR Decompression Centers' 
    : 'Política de Cookies - PR Decompression Centers';

  const pageDescription = language === 'en'
    ? 'Learn about how PR Decompression Centers uses cookies to improve your browsing experience and analyze website traffic.'
    : 'Conozca cómo PR Decompression Centers utiliza cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio web.';

  return (
    <MainContainer>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://prdecompressioncenters.com/cookie-policy" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prdecompressioncenters.com/cookie-policy" />
      </Head>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <PageContainer>
        <Content>
          <Title>
            {language === 'en' ? 'Cookie Policy' : 'Política de Cookies'}
          </Title>
          
          <Section>
            <SectionTitle>
              {language === 'en' ? 'What are cookies?' : '¿Qué son las cookies?'}
            </SectionTitle>
            <Text>
              {language === 'en' 
                ? 'Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.'
                : 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos ayudan a brindarle una mejor experiencia de navegación al recordar sus preferencias y analizar cómo usa nuestro sitio.'
              }
            </Text>
          </Section>

          <Section>
            <SectionTitle>
              {language === 'en' ? 'How we use cookies' : 'Cómo usamos las cookies'}
            </SectionTitle>
            <Text>
              {language === 'en' 
                ? 'We use cookies for the following purposes:'
                : 'Utilizamos cookies para los siguientes propósitos:'
              }
            </Text>
            <List>
              <ListItem>
                <strong>
                  {language === 'en' ? 'Essential cookies:' : 'Cookies esenciales:'}
                </strong>{' '}
                {language === 'en' 
                  ? 'These are necessary for the website to function properly and cannot be disabled.'
                  : 'Estas son necesarias para que el sitio web funcione correctamente y no se pueden desactivar.'
                }
              </ListItem>
              <ListItem>
                <strong>
                  {language === 'en' ? 'Analytics cookies:' : 'Cookies de análisis:'}
                </strong>{' '}
                {language === 'en' 
                  ? 'We use Google Analytics to understand how visitors interact with our website and improve our services.'
                  : 'Utilizamos Google Analytics para entender cómo los visitantes interactúan con nuestro sitio web y mejorar nuestros servicios.'
                }
              </ListItem>
              <ListItem>
                <strong>
                  {language === 'en' ? 'Advertising cookies:' : 'Cookies publicitarias:'}
                </strong>{' '}
                {language === 'en' 
                  ? 'We use Google Ads to show relevant advertisements and measure their effectiveness.'
                  : 'Utilizamos Google Ads para mostrar anuncios relevantes y medir su efectividad.'
                }
              </ListItem>
              <ListItem>
                <strong>
                  {language === 'en' ? 'Preference cookies:' : 'Cookies de preferencias:'}
                </strong>{' '}
                {language === 'en' 
                  ? 'These remember your language preference and other settings to enhance your experience.'
                  : 'Estas recuerdan su preferencia de idioma y otras configuraciones para mejorar su experiencia.'
                }
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>
              {language === 'en' ? 'Managing cookies' : 'Gestión de cookies'}
            </SectionTitle>
            <Text>
              {language === 'en' 
                ? 'You can control and manage cookies in several ways:'
                : 'Puede controlar y gestionar las cookies de varias maneras:'
              }
            </Text>
            <List>
              <ListItem>
                {language === 'en' 
                  ? 'Use our cookie consent banner to accept or decline non-essential cookies'
                  : 'Use nuestro banner de consentimiento de cookies para aceptar o rechazar cookies no esenciales'
                }
              </ListItem>
              <ListItem>
                {language === 'en' 
                  ? 'Adjust your browser settings to block or delete cookies'
                  : 'Ajuste la configuración de su navegador para bloquear o eliminar cookies'
                }
              </ListItem>
              <ListItem>
                {language === 'en' 
                  ? 'Visit your browser\'s help section for specific instructions'
                  : 'Visite la sección de ayuda de su navegador para obtener instrucciones específicas'
                }
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>
              {language === 'en' ? 'Third-party cookies' : 'Cookies de terceros'}
            </SectionTitle>
            <Text>
              {language === 'en' 
                ? 'Our website uses third-party services that may set their own cookies:'
                : 'Nuestro sitio web utiliza servicios de terceros que pueden establecer sus propias cookies:'
              }
            </Text>
            <List>
              <ListItem>
                <strong>Google Analytics:</strong>{' '}
                {language === 'en' 
                  ? 'For website analytics and performance monitoring'
                  : 'Para análisis del sitio web y monitoreo del rendimiento'
                }
              </ListItem>
              <ListItem>
                <strong>Google Ads:</strong>{' '}
                {language === 'en' 
                  ? 'For advertising and conversion tracking'
                  : 'Para publicidad y seguimiento de conversiones'
                }
              </ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>
              {language === 'en' ? 'Contact us' : 'Contáctenos'}
            </SectionTitle>
            <Text>
              {language === 'en' 
                ? 'If you have any questions about our cookie policy, please contact us at:'
                : 'Si tiene alguna pregunta sobre nuestra política de cookies, contáctenos en:'
              }
            </Text>
            <ContactInfo>
              <ContactItem>
                <strong>
                  {language === 'en' ? 'Phone:' : 'Teléfono:'}
                </strong> 787-261-8258
              </ContactItem>
              <ContactItem>
                <strong>
                  {language === 'en' ? 'Address:' : 'Dirección:'}
                </strong> RH-16 Ave. Building, Los Dominicos, Toa Baja, Levittown, Puerto Rico (PR)
              </ContactItem>
            </ContactInfo>
          </Section>

          <LastUpdated>
            {language === 'en' 
              ? 'Last updated: August 2025'
              : 'Última actualización: Agosto 2025'
            }
          </LastUpdated>
        </Content>
      </PageContainer>
    </MainContainer>
  );
};

export default CookiePolicy;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;
`;

const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const PageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 0;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: left;
  padding: 120px 40px 60px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 100px 20px 40px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: white;
  margin-bottom: 40px;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #00d9ff;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0, 217, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const List = styled.ul`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 15px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 12px;
`;

const ContactInfo = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 217, 255, 0.2);
  margin-top: 20px;
`;

const ContactItem = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const LastUpdated = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
  font-style: italic;
`;
