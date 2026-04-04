import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

type ShotProps = {
  src: string;
  label: string;
  emphasis?: 'hero' | 'default';
};

export default function Home() {
  const manualUrl = useBaseUrl('/docs/intro');
  const privacyUrl = useBaseUrl('/docs/privacy');
  const logoUrl = useBaseUrl('img/logo-mark.svg');
  const playBadgeUrl = useBaseUrl('img/store/google-play-badge.png');
  const appStoreBadgeUrl = useBaseUrl('img/store/app-store-badge.svg');

    const ANDROID_LIVE = true;
  const IOS_LIVE = true;

  const ANDROID_URL = 'https://play.google.com/store/apps/details?id=io.ceak.readium.app';
  const IOS_URL = 'https://apps.apple.com/us/app/readium/id6759912447';

  return (
    <Layout
      title="Readium"
      description={translate({
        id: 'homepage.meta.description',
        message: '독서를 완료 여부가 아니라 실제 읽은 시간과 흐름으로 남기는 세션 중심 리딩 로그 앱.',
      })}
    >
      <main className={styles.page}>
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <div className={styles.brandRow}>
                <div className={styles.logoWrap}>
                  <img src={logoUrl} alt="Readium" width={40} height={40} />
                </div>
                <span className={styles.brandLabel}>Readium</span>
              </div>

              <h1 className={styles.heroTitle}>
                <Translate id="homepage.hero.title">
                  완독한 책 목록이 아니라 읽은 시간을 남기세요.
                </Translate>
              </h1>

              <p className={styles.heroLead}>
                <Translate id="homepage.hero.lead">
                  Readium은 읽기 시작과 종료, 진행률, 노트, 타임라인 기록을 한 흐름으로 관리할 수 있게 만든
                  세션 중심 독서 로그 앱입니다.
                </Translate>
              </p>

              <div className={styles.heroActions}>
                <Link className="button button--primary button--lg" to={manualUrl}>
                  <Translate id="homepage.cta.manual">사용자 매뉴얼</Translate>
                </Link>
                <Link className="button button--secondary button--lg" to={privacyUrl}>
                  <Translate id="homepage.cta.privacy">개인정보처리방침</Translate>
                </Link>
              </div>

              <div className={styles.heroStats}>
                <Metric
                  label={translate({id: 'homepage.metric.focus', message: '핵심 기록 단위'})}
                  value={translate({id: 'homepage.metric.focus.value', message: '독서 세션'})}
                />
                <Metric
                  label={translate({id: 'homepage.metric.storage', message: '저장 방식'})}
                  value={translate({id: 'homepage.metric.storage.value', message: '로컬 우선'})}
                />
                <Metric
                  label={translate({id: 'homepage.metric.views', message: '주요 화면'})}
                  value={translate({id: 'homepage.metric.views.value', message: 'Library, Now Reading, Timeline'})}
                />
              </div>

              <div className={styles.storeRow}>
                <StoreBadge
                  imgSrc={playBadgeUrl}
                  alt="Get it on Google Play"
                  url={ANDROID_URL}
                  isLive={ANDROID_LIVE}
                  scale={1}
                />
                <StoreBadge
                  imgSrc={appStoreBadgeUrl}
                  alt="Download on the App Store"
                  url={IOS_URL}
                  isLive={IOS_LIVE}
                  scale={1.18}
                />
              </div>
            </div>

            <div className={styles.heroShots}>
              <Shot
                src="img/002-nowReading.jpg"
                label={translate({id: 'homepage.shot.nowReading', message: 'Now Reading'})}
                emphasis="hero"
              />
              <div className={styles.heroShotStack}>
                <Shot
                  src="img/001-library.jpg"
                  label={translate({id: 'homepage.shot.library', message: 'Library'})}
                />
                <Shot
                  src="img/005-timeline.jpg"
                  label={translate({id: 'homepage.shot.timeline', message: 'Timeline'})}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`container ${styles.cardGrid}`}>
            <Feature
              title={translate({id: 'homepage.feature.session.title', message: '세션 중심 독서 기록'})}
              desc={translate({
                id: 'homepage.feature.session.desc',
                message: '읽기 시작과 종료를 기록해 실제 독서 리듬이 남도록 설계했습니다.',
              })}
            />
            <Feature
              title={translate({id: 'homepage.feature.now.title', message: '현재 읽는 책 빠른 제어'})}
              desc={translate({
                id: 'homepage.feature.now.desc',
                message: '서재를 다시 뒤지지 않고 Now Reading에서 바로 시작, 종료, 세션 메모를 처리할 수 있습니다.',
              })}
            />
            <Feature
              title={translate({id: 'homepage.feature.timeline.title', message: '다시 찾아볼 수 있는 타임라인'})}
              desc={translate({
                id: 'homepage.feature.timeline.desc',
                message: '세션 기록, 완독, 노트가 시간순으로 모여 독서 흐름을 다시 살펴볼 수 있습니다.',
              })}
            />
            <Feature
              title={translate({id: 'homepage.feature.local.title', message: '백업 가능한 로컬 데이터'})}
              desc={translate({
                id: 'homepage.feature.local.desc',
                message: '독서 데이터는 기본적으로 기기에 저장되며 백업과 복원으로 옮길 수 있습니다.',
              })}
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <h2>
                <Translate id="homepage.screenshots.title">핵심 화면</Translate>
              </h2>
              <p>
                <Translate id="homepage.screenshots.subtitle">
                  각 화면은 책 관리, 현재 읽는 책 이어보기, 노트 확인, 타임라인 점검처럼 하나의 역할에 집중하도록
                  구성되어 있습니다.
                </Translate>
              </p>
            </div>

            <div className={styles.shotGrid}>
              <Shot src="img/001-library.jpg" label={translate({id: 'homepage.shot.library2', message: 'Library'})} />
              <Shot
                src="img/002-nowReading.jpg"
                label={translate({id: 'homepage.shot.nowReading2', message: 'Now Reading'})}
              />
              <Shot
                src="img/003-bookDetail.jpg"
                label={translate({id: 'homepage.shot.bookDetail', message: 'Book Detail'})}
              />
              <Shot src="img/004-notes.jpg" label={translate({id: 'homepage.shot.notes', message: 'Notes'})} />
              <Shot src="img/005-timeline.jpg" label={translate({id: 'homepage.shot.timeline2', message: 'Timeline'})} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`container ${styles.privacyPanel}`}>
            <div className={styles.sectionHeading}>
              <h2>
                <Translate id="homepage.privacy.title">데이터와 개인정보</Translate>
              </h2>
              <p>
                <Translate id="homepage.privacy.lead">
                  Readium은 기본적으로 독서 기록, 노트, 타임라인 데이터를 기기에 저장하며 Readium 서버로 업로드하지
                  않습니다.
                </Translate>
              </p>
            </div>

            <ul className={styles.privacyList}>
              <li>
                <Translate id="homepage.privacy.bullet1">
                  독서 데이터는 Readium 서버로 업로드되지 않습니다.
                </Translate>
              </li>
              <li>
                <Translate id="homepage.privacy.bullet2">
                  앱은 Firebase 익명 인증과 Google AdMob을 사용합니다.
                </Translate>
              </li>
            </ul>

            <div className={styles.heroActions}>
              <Link className="button button--secondary" to={privacyUrl}>
                <Translate id="homepage.privacy.cta">개인정보처리방침 보기</Translate>
              </Link>
              <Link className="button button--secondary" to={manualUrl}>
                <Translate id="homepage.manual.cta">매뉴얼 보기</Translate>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function Metric({label, value}: {label: string; value: string}) {
  return (
    <div className={styles.metricCard}>
      <span className={styles.metricLabel}>{label}</span>
      <strong className={styles.metricValue}>{value}</strong>
    </div>
  );
}

function Feature({title, desc}: {title: string; desc: string}) {
  return (
    <article className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

function Shot({src, label, emphasis = 'default'}: ShotProps) {
  const imgUrl = useBaseUrl(src);

  return (
    <figure className={emphasis === 'hero' ? styles.shotHeroCard : styles.shotCard}>
      <figcaption>{label}</figcaption>
      <img src={imgUrl} alt={label} />
    </figure>
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
    <div className={styles.storeBadge} style={{transform: `scale(${scale})`}}>
      <img src={imgSrc} alt={alt} />
      {!isLive && (
        <span className={styles.storeBadgeSoon}>
          <Translate id="homepage.store.comingSoon">출시 예정</Translate>
        </span>
      )}
    </div>
  );

  if (!isLive) {
    return <div className={styles.storeBadgeWrap}>{content}</div>;
  }

  return (
    <Link className={styles.storeBadgeWrap} to={url}>
      {content}
    </Link>
  );
}
