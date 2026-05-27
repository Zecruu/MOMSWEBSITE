import React from "react";
import Link from "next/link";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { FaArrowRight, FaCalendarAlt, FaClock, FaNewspaper } from "react-icons/fa";
import SEOHead from "../../components/SEOHead";
import { useLanguage } from "../../context/LanguageContext";

const AUTO_SEO_TOKEN = "eb7a7468585f8e5a68d08af72a20adf8";
const AUTO_SEO_ENDPOINT = `https://seo.nexulonllc.com/api/embed/content?t=${AUTO_SEO_TOKEN}`;

const normalizeSlug = (slug) => (Array.isArray(slug) ? slug.join("/") : slug || "");

const isSpanishText = (text = "") => {
  const value = text.toLowerCase();
  return /[áéíóúñ¿¡]/i.test(text) || /\b(alivio|dolor|espalda|estenosis|tratamiento|gu[ií]a|parches|descompresi[oó]n)\b/.test(value);
};

const pickLanguageArticle = (items, locale) => {
  const preferredSpanish = locale !== "en";
  return (
    items.find((item) => isSpanishText(`${item.title || ""} ${item.meta?.meta_description || ""}`) === preferredSpanish) ||
    items[0] ||
    null
  );
};

const formatDate = (date, locale) => {
  if (!date) return "";
  try {
    return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-PR", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return "";
  }
};

const InsightsPage = ({ article, articles, related, slug }) => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const isIndex = !slug;

  const pageTitle = article
    ? `${article.title} | PR Decompression Centers`
    : isEn
      ? "Articles | PR Decompression Centers"
      : "Articulos | PR Decompression Centers";

  const pageDescription =
    article?.meta?.meta_description ||
    (isEn
      ? "Educational articles about spinal decompression, chiropractic care, herniated discs, back pain, and non-surgical pain relief."
      : "Articulos educativos sobre descompresion espinal, quiropractica, discos herniados, dolor de espalda y alivio sin cirugia.");

  return (
    <Page>
      <ArticleTheme />
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`https://prdecompressioncenters.com/insights${slug ? `/${slug}` : ""}`}
      />

      <Hero>
        <HeroOverlay />
        <HeroInner>
          <Eyebrow>{isEn ? "Articles" : "Articulos"}</Eyebrow>
          <HeroTitle>
            {article ? article.title : isEn ? "Spine care insights." : "Articulos sobre cuidado de columna."}
          </HeroTitle>
          <HeroText>
            {isIndex
              ? isEn
                ? "Auto SEO articles styled to match the PR Decompression Centers clinical theme."
                : "Articulos de Auto SEO integrados al estilo clinico de PR Decompression Centers."
              : pageDescription}
          </HeroText>
        </HeroInner>
      </Hero>

      <ContentWrap>
        <MainColumn>
          {article ? (
            <ArticleShell>
              <ArticleMeta>
                <FaClock />
                <span>{formatDate(article.published_at, language)}</span>
              </ArticleMeta>
              <GeneratedArticle dangerouslySetInnerHTML={{ __html: article.body || "" }} />
            </ArticleShell>
          ) : (
            <ArticleList>
              {articles.map((item) => (
                <ArticlePreview key={`${item.slug}-${item.title}`}>
                  <ArticleMeta>
                    <FaClock />
                    <span>{formatDate(item.published_at, language)}</span>
                  </ArticleMeta>
                  <h2>{item.title}</h2>
                  <p>{item.meta?.meta_description}</p>
                  <ReadLink href={`/insights/${item.slug}`}>
                    {isEn ? "Read article" : "Leer articulo"} <FaArrowRight />
                  </ReadLink>
                </ArticlePreview>
              ))}
            </ArticleList>
          )}
        </MainColumn>

        <Sidebar>
          <SidebarCard>
            <SidebarTitle><FaNewspaper /> {isEn ? "Latest articles" : "Ultimos articulos"}</SidebarTitle>
            <SidebarList>
              {articles.slice(0, 6).map((item) => (
                <li key={`${item.slug}-${item.title}`}>
                  <Link href={`/insights/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </SidebarList>
          </SidebarCard>

          {!!related.length && (
            <SidebarCard>
              <SidebarTitle>{isEn ? "Related topics" : "Temas relacionados"}</SidebarTitle>
              <TopicList>
                {related.map((item) => (
                  <li key={`${item.slug}-${item.title}`}>{item.title}</li>
                ))}
              </TopicList>
            </SidebarCard>
          )}

          <CTABox>
            <Eyebrow>{isEn ? "Need help?" : "Necesitas ayuda?"}</Eyebrow>
            <h3>{isEn ? "Schedule a consultation." : "Agenda una consulta."}</h3>
            <p>
              {isEn
                ? "Talk with our team about your symptoms and whether decompression care may be appropriate."
                : "Habla con nuestro equipo sobre tus sintomas y si la descompresion puede ser apropiada."}
            </p>
            <CTA href="https://wa.me/17872618258" target="_blank" rel="noopener">
              <FaCalendarAlt />
              {isEn ? "Book now" : "Agendar"}
            </CTA>
          </CTABox>
        </Sidebar>
      </ContentWrap>
    </Page>
  );
};

export async function getServerSideProps({ params, locale }) {
  const slug = normalizeSlug(params?.slug);

  try {
    const response = await fetch(AUTO_SEO_ENDPOINT);
    const data = await response.json();
    const blocks = Array.isArray(data?.blocks) ? data.blocks : [];
    const articleBlocks = blocks.filter((block) => block.type === "article" && block.body && block.slug);

    const grouped = articleBlocks.reduce((acc, item) => {
      acc[item.slug] = acc[item.slug] || [];
      acc[item.slug].push(item);
      return acc;
    }, {});

    const articles = Object.values(grouped)
      .map((items) => pickLanguageArticle(items, locale))
      .filter(Boolean)
      .sort((a, b) => new Date(b.published_at || 0) - new Date(a.published_at || 0));

    const matches = slug ? grouped[slug] || [] : [];
    const article = slug ? pickLanguageArticle(matches, locale) : null;
    const related = blocks.filter((block) => block.type === "internal_link" && block.slug === slug && block.title);

    if (slug && !article) {
      return { notFound: true };
    }

    return {
      props: {
        article,
        articles,
        related,
        slug,
      },
    };
  } catch {
    return {
      props: {
        article: null,
        articles: [],
        related: [],
        slug,
      },
    };
  }
}

export default InsightsPage;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ArticleTheme = createGlobalStyle`
  .auto-seo-article h1,
  .auto-seo-article h2,
  .auto-seo-article h3,
  .auto-seo-article h4 {
    color: #ffffff;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 1.12;
  }

  .auto-seo-article h2 {
    font-size: clamp(28px, 3vw, 42px);
    margin: 44px 0 16px;
  }

  .auto-seo-article h3 {
    font-size: 24px;
    margin: 30px 0 12px;
    color: #dffbff;
  }

  .auto-seo-article p,
  .auto-seo-article li {
    color: rgba(255, 255, 255, 0.78);
    font-size: 17px;
    line-height: 1.8;
  }

  .auto-seo-article p {
    margin: 0 0 18px;
  }

  .auto-seo-article ul,
  .auto-seo-article ol {
    margin: 16px 0 24px;
    padding-left: 22px;
  }

  .auto-seo-article li {
    margin-bottom: 10px;
  }

  .auto-seo-article strong {
    color: #ffffff;
    font-weight: 900;
  }

  .auto-seo-article a {
    color: #00f2fe;
    font-weight: 800;
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 242, 254, 0.35);
  }

  .auto-seo-article blockquote {
    margin: 28px 0;
    padding: 20px 24px;
    border-left: 4px solid #00f2fe;
    background: rgba(0, 242, 254, 0.08);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.86);
  }

  .auto-seo-article img {
    max-width: 100%;
    border-radius: 8px;
    margin: 28px 0;
    box-shadow: 0 22px 60px rgba(0, 0, 0, 0.35);
  }
`;

const Page = styled.div`
  width: 100%;
  background: #0b1220;
  color: #ffffff;
`;

const Hero = styled.section`
  position: relative;
  min-height: 44vh;
  display: flex;
  align-items: center;
  background: url('/images/hero-lumbar-decompression.png') center/cover no-repeat, #07111f;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(7, 17, 31, 0.96) 0%, rgba(7, 17, 31, 0.8) 58%, rgba(7, 17, 31, 0.44) 100%),
    radial-gradient(circle at 76% 24%, rgba(0, 242, 254, 0.2), transparent 32%);
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 76px 24px 64px;
  animation: ${fadeUp} 0.65s ease both;
`;

const Eyebrow = styled.div`
  color: #00f2fe;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const HeroTitle = styled.h1`
  max-width: 900px;
  margin: 0 0 18px;
  color: #ffffff;
  font-size: clamp(40px, 6vw, 76px);
  line-height: 1;
  font-weight: 900;
`;

const HeroText = styled.p`
  max-width: 760px;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 19px;
  line-height: 1.65;
`;

const ContentWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 74px 24px 90px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 34px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const MainColumn = styled.main`
  min-width: 0;
`;

const ArticleShell = styled.article`
  border-radius: 8px;
  padding: clamp(26px, 4vw, 46px);
  background:
    linear-gradient(135deg, rgba(0, 242, 254, 0.08), rgba(79, 172, 254, 0.03)),
    #07111f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.28);
`;

const GeneratedArticle = styled.div.attrs({ className: "auto-seo-article" })``;

const ArticleMeta = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 13px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const ArticleList = styled.div`
  display: grid;
  gap: 18px;
`;

const ArticlePreview = styled.article`
  border-radius: 8px;
  padding: 26px;
  background: #ffffff;
  border: 1px solid #dce8f2;
  box-shadow: 0 18px 50px rgba(11, 18, 32, 0.12);

  ${ArticleMeta} {
    color: #64748b;
  }

  h2 {
    margin: 0 0 12px;
    color: #0b1220;
    font-size: clamp(24px, 3vw, 34px);
    line-height: 1.1;
    font-weight: 900;
  }

  p {
    color: #526174;
    line-height: 1.7;
    margin: 0 0 18px;
  }
`;

const ReadLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #007a95;
  font-weight: 900;
  text-decoration: none;
`;

const Sidebar = styled.aside`
  display: grid;
  gap: 18px;
  align-content: start;
  position: sticky;
  top: 92px;

  @media (max-width: 980px) {
    position: static;
  }
`;

const SidebarCard = styled.div`
  border-radius: 8px;
  padding: 22px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SidebarTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 16px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 900;

  svg {
    color: #00f2fe;
  }
`;

const SidebarList = styled.ul`
  display: grid;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: rgba(255, 255, 255, 0.78);
    text-decoration: none;
    line-height: 1.45;
  }

  a:hover {
    color: #00f2fe;
  }
`;

const TopicList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    border-radius: 999px;
    padding: 7px 10px;
    background: rgba(0, 242, 254, 0.1);
    border: 1px solid rgba(0, 242, 254, 0.2);
    color: rgba(255, 255, 255, 0.82);
    font-size: 13px;
    font-weight: 800;
  }
`;

const CTABox = styled.div`
  border-radius: 8px;
  padding: 24px;
  background:
    linear-gradient(135deg, rgba(0, 242, 254, 0.14), rgba(79, 172, 254, 0.06)),
    #0f2138;
  border: 1px solid rgba(0, 242, 254, 0.2);

  h3 {
    margin: 0 0 10px;
    color: #ffffff;
    font-size: 26px;
    line-height: 1.1;
    font-weight: 900;
  }

  p {
    margin: 0 0 18px;
    color: rgba(255, 255, 255, 0.76);
    line-height: 1.6;
  }
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  color: #06101f;
  font-weight: 900;
  text-decoration: none;
`;
