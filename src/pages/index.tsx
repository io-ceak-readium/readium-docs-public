import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Readium"
      description="읽기 기록 · 세션 · 노트를 타임라인으로 정리하는 앱"
    >
      <main>
        <section style={{ padding: '56px 0' }}>
          <div className="container">
            <h1 style={{ fontSize: 44, marginBottom: 12 }}>Readium</h1>
            <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 720 }}>
              읽기 기록, 세션, 노트를 한 흐름으로 남기고 타임라인으로 다시 꺼내보는
              로컬 중심 리딩 로그 앱.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                User Manual
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/io-ceak-readium/readium"
              >
                GitHub
              </Link>
            </div>

            <div style={{ marginTop: 36, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              <Feature
                title="타임라인"
                desc="세션 시작/종료, 완독, 노트를 이벤트로 축적해 흐름으로 본다."
              />
              <Feature
                title="세션 로그"
                desc="읽는 중 상태를 세션으로 관리하고 종료 시 메모를 남길 수 있다."
              />
              <Feature
                title="노트"
                desc="책 노트/세션 노트를 빠르게 작성하고 필요한 텍스트를 복사한다."
              />
              <Feature
                title="백업/복구"
                desc="로컬 DB를 export/import로 옮겨 기기 변경에도 유지한다."
              />
            </div>
          </div>
        </section>

        <section style={{ padding: '28px 0 72px' }}>
          <div className="container">
            <h2 style={{ marginBottom: 10 }}>Screenshots</h2>
            <p style={{ opacity: 0.85, maxWidth: 720 }}>
              스크린샷을 <code>static/img/</code>에 넣고 아래 경로만 바꾸면 된다.
            </p>

            <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 16 }}>
              <Shot src="/img/placeholder-1.png" label="Library / Now Reading" />
              <Shot src="/img/placeholder-2.png" label="Timeline" />
              <Shot src="/img/placeholder-3.png" label="Book Detail" />
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
  return (
    <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ padding: 10, fontSize: 14, opacity: 0.85 }}>{label}</div>
      <div style={{ background: 'rgba(255,255,255,0.04)', height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={src} alt={label} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
      </div>
    </div>
  );
}