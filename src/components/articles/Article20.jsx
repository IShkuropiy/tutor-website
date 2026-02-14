import "./Articles.css";
import { Link } from 'react-router-dom';
import Header from "./header/Header";

export default function Article19() {
    return (
        <main className="post">
            <Header
                title="Mapping the Keys: A Guide to Registers and Octaves"
                date="Feb 13, 2026"
            />

            <section className="article-content">
                <p>A standard piano keyboard has 88 keys. But in music, we only use 12 different notes before they start repeating again. And there are only seven letter names for notes: <strong> A, B, C, D, E, F, G </strong>. After G, the pattern starts again at A.</p>
       
                <p>
                    In many European countries, these same notes also have different names used for singing: Do, Re, Mi, Fa, Sol (or So), La, Ti (or Si)
                </p>
                <p>They match like this:</p>
                <ul>
                    <li>C = Do</li>
                    <li>D = Re</li>
                    <li>E = Mi</li>
                    <li>F = Fa</li>
                    <li>G = Sol</li>
                    <li>A = La</li>
                    <li>B = Ti (or Si)</li>
                </ul>

                <p>
                    These names are part of a system called <a
                        href="https://en.wikipedia.org/wiki/Solf%C3%A8ge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                    > solfège
                    </a>. It helps singers learn melodies and recognise how notes move up and down. The syllables (Do, Re, Mi, etc.) come from a medieval Latin hymn written in the 11th century by a monk named Guido of Arezzo. Each line of the hymn began on a slightly higher note. The first syllables of each line became the note names:
                    <ul>
                        <li><strong>Ut</strong>queant laxis</li>
                        <li><strong> Re</strong>sonare fibris</li>
                        <li><strong>Mi</strong>ra gestorum</li>
                        <li><strong>Fa</strong>muli tuorum</li>
                        <li><strong>Sol</strong>ve polluti</li>
                        <li><strong>La</strong>bii reatum</li>
                    </ul>
                    <p>
                        Later, “Si” (or “Ti”) was added, formed from the first letters of <span className="italic">Sancte Iohannes</span> (Saint John). “Ut” was eventually replaced by “Do” because it is easier to sing.  “Ut” was eventually replaced by “Do” because it is easier to sing.
                    </p>
                    <p>It may be translated: <span className="italic">So that they may, with loosened voices, resound the wonders of your deeds, clean the guilt from our stained lips, O Saint John.</span></p>
                </p>

                <img src="/images/art2.gif" className="article-image" />
                
                <h2>What Is an Octave?</h2>
                <p>
                    If there are 88 keys, why do we have only seven letter names for them? As I mentioned before, it's because the musical alphabet repeats over and over—seven times (with an extra A, B, and C at the top)—which means we have at least seven full octaves.
                </p>
                <p>
                    An <strong>octave</strong> is the distance from one note to the next note with the same name. For example, from C up to the next C, or from A up to the next A.
                </p>
                <p>On a piano, an octave would look like this:</p>
                <img src="/images/markoctaves.jpg" className="article-image" />

                <p>
                    Let's look at the three most-used octave registers that make up the center of the keyboard: Octave 3, Octave 4, and Octave 5.
                </p>
                <p>
                    <strong>Octave 4</strong> is smack in the middle of the piano. This is the "speaking" range. It mirrors the human voice in conversation, or a solo violin. It carries the most emotional weight because it feels the most personal and "alive."
                </p>
                <p>
                    <strong>Octave 3</strong> is one octave below Octave 4, and its notes can be described as moderately low. Think of a cello, the chest voice of a baritone, the low hum of a distant engine, or the steady roll of a deep river.
                </p>
                <p>
                    <strong>Octave 5</strong> is just the opposite, one octave above Octave 4, and its notes are moderately high. It’s sounds like a birdsong, falling rain on a tin roof, or a flute playing a high melody. It’s light and airy, bright and shimmering.
                </p>
                <p>
                    On a standard 88-key piano the lowest note is A0 and the highest note is C8. The lowest C on the piano is C1 The highest C is C8. Each time you move from one C to the next C, you move up one octave.
                </p>

                <img src="/images/octaveidentification.jpg" className="article-image" />
                <p>
                    Your main goal right now is to become friends with your piano! Focus on spotting the patterns of the black and white keys and exploring every register with purpose. Don't be shy—play your way from the deepest, rumbling bass to the highest, tinkling treble. Listen closely to how the sound changes as you travel!

                </p>
            </section>
        </main>
    );
}