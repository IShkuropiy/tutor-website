import "./Articles.css";
import { Link } from 'react-router-dom';
import Header from "./header/Header";
import FooterBtn from "../sections/footer-btn/FooterBtn";
import TempoTable from "./TempoTable";
import TempoChanges from "./TempoChanges";
import DynamicsTable from "./DynamicsTable";
import DynamicsChanges from "./DynamicChanges";
import Techniques from "./Techniques";
import CharacterMarkings from "./CharacterMarkings";
import GeneralTerms from "./GeneralTerms";

export default function Article19() {
    return (
        <main className="post">
            <Header
                title="Italian Musical Terms"
                date="Feb 8, 2026"
            />

            <section className="article-content">
                <p>
                    Italian words are typically used to indicate tempo, dynamics, and performance style. While you may encounter German or French musical terms, Italian remains the most common and traditional language of classical music. Almost every piece you come across will be filled with various remarks, cues, and recommendations—written in Italian—on how to perform the work, a specific section, a phrase, or even a single note. This is why it is essential not only to familiarise yourself with these terms but to know them by heart.
                </p>
                <p>
                    Below, I have listed the essential terms you need to learn.
                </p>
                <h3>Tempo</h3>
                <p>
                    You can read more about musical tempo in detail
                    <Link to="/blog/article8"> here</Link>.
                </p>

                < TempoTable />

                <h3>Tempo Changes</h3>
                <p>
                    A list of terms for tempo alterations. Words indicating gradual changes may be extended with dashed lines to show the duration of the effect (e.g., "rit. _ _ _").
                </p>

                < TempoChanges />

                <h3>Dynamics</h3>
                <p>
                    You can read more about musical dynamics in detail <Link to="/blog/article5">here</Link>.
                </p>

                < DynamicsTable />

                <h3>Dynamic Changes</h3>
                <p>
                    A list of terms for changes in volume. "Hairpins" (crescendo/diminuendo marks) indicate short-term changes, while the abbreviations cresc. and dim. are used for changes over a longer period. These terms may also include dashed lines to indicate duration.
                </p>

                < DynamicsChanges />

                <h3>Articulation</h3>
                <p>
                    A list of key terms for playing techniques. These instructions tell the performer to use specific techniques to achieve the desired sound.
                </p>

                <Techniques />

                <h3>Character Markings</h3>
                <p>
                    These terms help the performer convey the mood of the piece through subtle adjustments in tempo, dynamics, and articulation.
                </p>

                < CharacterMarkings />

                <h3>General Terms</h3>
                <p>
                    These terms are often used in combination with others, such as allegro molto (very fast) or con amore (with love).
                </p>

                < GeneralTerms />

                <FooterBtn pdfUrl="/public/italianmusicalterms.pdf" />
            </section>
        </main>
    );
}