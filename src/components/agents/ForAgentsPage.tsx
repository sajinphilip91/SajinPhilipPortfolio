import fs from "node:fs";
import path from "node:path";
import { PageHeader } from "@/components/leadership/PageHeader";
import { site } from "@/content/home";
import styles from "./ForAgents.module.css";

const PHONE = "+91 9746648514";

/** Turns the plain URLs in the profile text into links. */
function linkify(text: string) {
  return text.split(/(https?:\/\/[^\s)]*[^\s).,])/).map((part, i) =>
    i % 2 ? (
      <a key={i} href={part}>
        {part}
      </a>
    ) : (
      part
    ),
  );
}

export function ForAgentsPage() {
  // The page and the file agents fetch stay the same text.
  const file = fs.readFileSync(path.join(process.cwd(), "public/llms-full.txt"), "utf8");
  const start = file.indexOf("# Sajin Philip");
  const notes = file.slice(0, start).trim().split(/\n\s*\n/);

  return (
    <>
      <PageHeader />
      <main className={styles.page}>
        <div className={styles.inner}>
          <aside className={styles.note}>
            {notes.map((note) => (
              <p key={note}>{linkify(note)}</p>
            ))}
            <p>
              For contact: <a href={`mailto:${site.email}`}>{site.email}</a> | {PHONE}
              <br />
              LinkedIn: <a href={site.social.linkedin}>linkedin.com/in/sajin-philip-65350534</a>
            </p>
            <ul className={styles.files}>
              <li>
                <a href="/llms-full.txt">LLMS-FULL.txt</a>
              </li>
              <li>
                <a href="/llms.txt">LLMS.txt</a>
              </li>
              <li>Agent.md (coming soon)</li>
            </ul>
          </aside>
          <pre className={styles.text}>{linkify(file.slice(start).trim())}</pre>
        </div>
      </main>
    </>
  );
}
