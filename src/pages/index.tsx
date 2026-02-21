import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const manualUrl = useBaseUrl('/docs/intro');
  const privacyUrl = useBaseUrl('/docs/privacy'); // (아래 설명 참고: Privacy 페이지를 docs로 만들 경우)
  const logoUrl = useBaseUrl('img/logo-mark.svg');

  return (
    <Layout title="Readium" description="당신의 독서를 시간으로 남기는 기록 앱">
      <main>
        {/* HERO */}
        <section style={{ padding: '56px 0 28px' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <img src={logoUrl} alt="Readium" width={44} height={44} />
              <h1 style={{ fontSize: 44, margin: 0 }}>Readium</h1>
            </div>

            <p style={{ fontSize: 18, opacity: 0.92, maxWidth: 760, marginTop: 12 }}>
              당신의 독서를 <b>시간으로 남기는</b> 세션 중심 리딩 로그 앱.
              읽기 기록, 세션, 노트를 한 흐름으로 축적하고 타임라인으로 다시 꺼내봅니다.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
              <Link className="button button--primary button--lg" to={manualUrl}>
                User Manual
              </Link>
              <Link className="button button--secondary button--lg" to="https://github.com/io-ceak-readium/readium">
                GitHub
              </Link>
              {/* Privacy 문서를 docs로 만들면 활성화 */}
              {/* <Link className="button button--secondary button--lg" to={privacyUrl}>
                Privacy Policy
              </Link> */}
            </div>

            {/* FEATURES */}
            <div
              style={{
                marginTop: 32,
                display: 'grid',
                gap: 12,
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              }}
            >
              <Feature
                title="⏱ 세션 로그"
                desc="읽기 시작/종료를 기록하고, 세션별 독서 흐름을 남깁니다."
              />
              <Feature
                title="🗂 타임라인"
                desc="세션/완독/노트를 이벤트로 축적해, 독서 흐름을 한눈에 봅니다."
              />
              <Feature
                title="📝 노트"
                desc="책 노트/세션 노트를 분리해 기록하고, 필요한 텍스트를 복사할 수 있습니다."
              />
              <Feature
                title="💾 백업/복구"
                desc="로컬 DB를 export/import로 옮겨 기기 변경에도 유지합니다."
              />
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <section style={{ padding: '28px 0 56px' }}>
          <div className="container">
            <h2 style={{ marginBottom: 10 }}>Screenshots</h2>

            <div
              style={{
                display: 'grid',
                gap: 12,
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                marginTop: 16,
              }}
            >
              <Shot src="img/001-library.jpg" label="Library" />
              <Shot src="img/002-nowReading.jpg" label="Now Reading" />
              <Shot src="img/003-bookDetail.jpg" label="Book Detail" />
              <Shot src="img/004-notes.jpg" label="Notes" />
              <Shot src="img/005-timeline.jpg" label="Timeline" />
            </div>
          </div>
        </section>

        {/* PRIVACY (요약) */}
        <section style={{ padding: '0 0 72px' }}>
          <div className="container">
            <h2 style={{ marginBottom: 10 }}>Data & Privacy</h2>

            <div
              style={{
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 14,
                padding: 16,
                maxWidth: 920,
              }}
            >
              <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.92 }}>
                <li>
                  읽기 기록/세션/노트/타임라인 데이터는 <b>기기 로컬에 저장</b>되며, Readium 서버로 전송되지 않습니다.
                </li>
                <li>
                  앱은 <b>Firebase 익명 인증</b>과 <b>Google AdMob</b>을 사용하며, 해당 서비스는 기기/네트워크/진단 정보 등을 처리할 수 있습니다.
                </li>
              </ul>

              <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link className="button button--secondary" to={privacyUrl}>Privacy Policy</Link>
                <Link className="button button--secondary" to={manualUrl}>
                  Read the Manual
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: 16 }}>
      <h3 style={{ margin: 0, marginBottom: 8 }}>{title}</h3>
      <p style={{ margin: 0, opacity: 0.9 }}>{desc}</p>
    </div>
  );
}

function Shot({ src, label }: { src: string; label: string }) {
  const imgUrl = useBaseUrl(src);

  return (
    <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ padding: 10, fontSize: 14, opacity: 0.85 }}>{label}</div>
      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          height: 420,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={imgUrl} alt={label} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
      </div>
    </div>
  );
}