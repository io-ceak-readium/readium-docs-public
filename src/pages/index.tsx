import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';

export default function Home() {
  const manualUrl = useBaseUrl('/docs/intro');
  const privacyUrl = useBaseUrl('/docs/privacy');
  const logoUrl = useBaseUrl('img/logo-mark.svg');

  const playBadgeUrl = useBaseUrl('img/store/google-play-badge.png');
  const appStoreBadgeUrl = useBaseUrl('img/store/app-store-badge.svg');

  const ANDROID_LIVE = false; // 🚀 출시하면 true
  const IOS_LIVE = false;     // 🚀 출시하면 true

  const ANDROID_URL = 'https://play.google.com/store/apps/details?id=your.package';
  const IOS_URL = 'https://apps.apple.com/app/idXXXXXXXXXX';

  return (
    <Layout
      title="Readium"
      description={translate({
        id: 'homepage.meta.description',
        message: 'A session-based reading log app that saves your reading as time.',
      })}
    >
      <main>
        {/* HERO */}
        <section style={{padding: '56px 0 24px'}}>
          <div className="container">
            <div style={{display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap'}}>
              <img src={logoUrl} alt="Readium" width={44} height={44} />
              <h1 style={{fontSize: 44, margin: 0}}>Readium</h1>
            </div>

            <p style={{fontSize: 18, opacity: 0.92, maxWidth: 820, marginTop: 12}}>
              <Translate id="homepage.hero.lead">
                Readium is a session-based reading log app that helps you save your reading as time. Track
                start/end sessions, completion, and notes—then revisit everything in a timeline.
              </Translate>
            </p>

            <div style={{display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap'}}>
              <Link className="button button--primary button--lg" to={manualUrl}>
                <Translate id="homepage.cta.manual">User Manual</Translate>
              </Link>
              <Link className="button button--secondary button--lg" to={privacyUrl}>
                <Translate id="homepage.cta.privacy">Privacy</Translate>
              </Link>
            </div>

            <div
              style={{
                marginTop: 32,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 0,
                flexWrap: 'wrap',
              }}
            >
              <StoreBadge
                imgSrc={playBadgeUrl}
                alt="Get it on Google Play"
                url={ANDROID_URL}
                isLive={ANDROID_LIVE}
                scale={1.00}
              />
              <StoreBadge
                imgSrc={appStoreBadgeUrl}
                alt="Download on the App Store"
                url={IOS_URL}
                isLive={IOS_LIVE}
                scale={1.22}
              />
            </div>
            
            <div
              style={{
                marginTop: 32,
                display: 'grid',
                gap: 12,
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              }}
            >
              <Feature
                title={translate({id: 'homepage.feature.session.title', message: '⏱ Sessions'})}
                desc={translate({
                  id: 'homepage.feature.session.desc',
                  message: 'Log start and end times. Reading is saved as time.',
                })}
              />
              <Feature
                title={translate({id: 'homepage.feature.timeline.title', message: '🗂 Timeline'})}
                desc={translate({
                  id: 'homepage.feature.timeline.desc',
                  message: 'Sessions, completion, and notes are organized in chronological order.',
                })}
              />
              <Feature
                title={translate({id: 'homepage.feature.notes.title', message: '📝 Notes'})}
                desc={translate({
                  id: 'homepage.feature.notes.desc',
                  message: 'Keep book notes and session notes separate—write only what you need.',
                })}
              />
              <Feature
                title={translate({id: 'homepage.feature.local.title', message: '💾 Local-first'})}
                desc={translate({
                  id: 'homepage.feature.local.desc',
                  message: 'Your reading data is stored on-device. Move it with backup/restore.',
                })}
              />
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section style={{padding: '24px 0 56px'}}>
          <div className="container">
            <h2 style={{marginBottom: 10}}>
              <Translate id="homepage.screenshots.title">Screenshots</Translate>
            </h2>
            <p style={{opacity: 0.86, maxWidth: 900, marginTop: 0}}>
              <Translate id="homepage.screenshots.subtitle">
                Designed to keep you focused on logging—without complicated setup.
              </Translate>
            </p>

            <div
              style={{
                display: 'grid',
                gap: 12,
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                marginTop: 16,
              }}
            >
              <Shot src="img/001-library.jpg" label={translate({id: 'homepage.shot.library', message: 'Library'})} />
              <Shot
                src="img/002-nowReading.jpg"
                label={translate({id: 'homepage.shot.nowReading', message: 'Now Reading'})}
              />
              <Shot
                src="img/003-bookDetail.jpg"
                label={translate({id: 'homepage.shot.bookDetail', message: 'Book Detail'})}
              />
              <Shot src="img/004-notes.jpg" label={translate({id: 'homepage.shot.notes', message: 'Notes'})} />
              <Shot src="img/005-timeline.jpg" label={translate({id: 'homepage.shot.timeline', message: 'Timeline'})} />
            </div>
          </div>
        </section>

        {/* DATA & PRIVACY SUMMARY */}
        <section style={{padding: '0 0 72px'}}>
          <div className="container">
            <h2 style={{marginBottom: 10}}>
              <Translate id="homepage.privacy.title">Data & Privacy</Translate>
            </h2>

            <div
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 14,
                padding: 16,
                maxWidth: 980,
              }}
            >
              <p style={{marginTop: 0, opacity: 0.92}}>
                <Translate id="homepage.privacy.lead">
                  By default, Readium stores your reading logs, sessions, notes, and timeline data locally on your device.
                </Translate>
              </p>

              <ul style={{margin: 0, paddingLeft: 18, opacity: 0.9}}>
                <li>
                  <Translate id="homepage.privacy.bullet1">
                    Your reading data is not uploaded to a Readium server.
                  </Translate>
                </li>
                <li>
                  <Translate id="homepage.privacy.bullet2">
                    The app uses Firebase anonymous authentication and Google AdMob.
                  </Translate>
                </li>
              </ul>

              <div style={{marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                <Link className="button button--secondary" to={privacyUrl}>
                  <Translate id="homepage.privacy.cta">Read Privacy Policy</Translate>
                </Link>
                <Link className="button button--secondary" to={manualUrl}>
                  <Translate id="homepage.manual.cta">Read the Manual</Translate>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function Feature({title, desc}: {title: string; desc: string}) {
  return (
    <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: 16}}>
      <h3 style={{margin: 0, marginBottom: 8}}>{title}</h3>
      <p style={{margin: 0, opacity: 0.9}}>{desc}</p>
    </div>
  );
}

function Shot({src, label}: {src: string; label: string}) {
  const imgUrl = useBaseUrl(src);

  return (
    <div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, overflow: 'hidden'}}>
      <div style={{padding: 10, fontSize: 14, opacity: 0.85}}>{label}</div>
      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          height: 420,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={imgUrl} alt={label} style={{maxWidth: '90%', maxHeight: '90%', objectFit: 'contain'}} />
      </div>
    </div>
  );
}

function StoreBadge({
  imgSrc,
  alt,
  url,
  isLive,
  scale = 1,
}: {
  imgSrc: string;
  alt: string;
  url: string;
  isLive: boolean;
  scale?: number;
}) {
  const content = (
    <div
      style={{
        position: 'relative',
        width: 200,
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isLive ? 'pointer' : 'default',
      }}
    >
      <img
        src={imgSrc}
        alt={alt}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          filter: isLive ? 'none' : 'grayscale(100%)',
          opacity: isLive ? 1 : 0.9,
          transform: `scale(${scale})`,
        }}
      />

      {!isLive && (
        <span
          style={{
            position: 'absolute',
            top: 1,
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#ff4d4f',
            color: '#fff',
            fontSize: 10,
            padding: '2px 8px',
            borderRadius: 999,
            fontWeight: 700,
            opacity: 0.92,
            boxShadow: '0 1px 4px rgba(0,0,0,0.35)',
          }}
        >
          Coming Soon
        </span>
      )}
    </div>
  );

  // 🚀 출시되면 자동으로 링크 활성
  return isLive ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}