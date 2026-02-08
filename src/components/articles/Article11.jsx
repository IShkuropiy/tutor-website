import "./Articles.css";
import Header from "./header/Header";
import art9 from "../../assets/art9.png";
import art10 from "../../assets/art10.jpg";

export default function Article11() {

    return (

        <main className="post">
            <Header
                title="Mode: The Alphabet of Music"
                date="Oct 29, 2025"
            />

            <section className="article-content">

                <p>
                    In music, a <strong>mode</strong> is like an alphabet. Just as you need specific letters to build words, musicians use a specific set of notes to build a song. These notes aren't picked at random; they are a team that follows a specific pattern so the music sounds "right" to our ears. Each note on this team has a number called a <strong> scale degree</strong>. We count them from 1 to 7. Not all notes in a scale have the same job. We can split them into two groups: <strong>Stable</strong> and <strong>Unstable</strong>.
                </p>

                <h3> The Stable Notes</h3>
                <p>These notes feel solid, calm, and finished. If a song ends on one of these, you feel like you can breathe a sigh of relief.</p>

                <ul className="tips">
                    <li><strong>The Tonic (I): </strong>
                        This is the "Captain”. It is the most important note of all.</li>
                    <li><strong>The 3rd and 5th Notes (III and V): </strong>
                        These are the Captain's best friends.</li>
                    <li><strong>The Tonic Triad:  </strong>
                        When you play 1, 3, and 5 together, they form a "chord" that feels like a solid foundation for a house.</li>
                </ul>

                <h3> The Unstable Notes </h3>
                <p>These are the 2nd, 4th, 6th, and 7th notes. They feel like they are leaning over a cliff! They sound "shaky" or unfinished. If you stop a song on an unstable note, it feels like a sentence that ends with...</p>

                <h3>Gravity and "The Pull" (Resolution)</h3>
                <p>
                    In music, there is a kind of "invisible gravity" called Tonal Attraction.
                    The wobbly (unstable) notes don't like being shaky; they want to fall or "pull" toward the nearest solid (stable) note. When a wobbly note finally lands on a solid note, we call it a Resolution. It's like a deep breath after a long run.
                </p>

                <h3>The Necessity of Instability</h3>
                <p>
                    You might think, "Why not just use the solid notes?"
                    Well, that would be a very boring story! Imagine a movie where nothing ever goes wrong—it would be pretty dull. We need the wobbly notes to create drama and tension. They pull us away from home, making the music feel exciting and adventurous, so that when we finally "resolve" back to the solid notes, it feels extra satisfying.
                </p>

                <h2>Major and Minor: The Two Big Moods</h2>
                <p>
                    If a mode is an alphabet, then Major and Minor are like different "fonts" or styles of writing. They are the two most common types of modes, and they decide the overall mood of the music.
                </p>

                <h3>The Magic of the 3rd Note</h3>
                <p>
                    Even though a scale has seven notes, the biggest difference between <strong>Major</strong> and <strong>Minor</strong> comes down to just one note: the 3rd note (the Mediant). In Major the 3rd note is a little bit higher. This usually makes the music sound bright, happy, and strong. In Minor the 3rd note is a tiny bit lower. This makes the music sound sad and mysterious. By shifting that one note just a little bit, you change the whole "flavor" of the song!
                </p>

                <h2>What is a Key? (Tonality)</h2>
                <p>
                    You might hear musicians say a song is in the "Key of C Major" or the "Key of A Minor." This is called Tonality, and it's actually quite simple. The "Key" is named after the Captain (The Tonic). If the first note of a Major scale is C, the song is in C Major. If the first note of a Minor scale is A, it's in A Minor. The name of the key tells you where the song is going to end. For example, if you listen to Beethoven's Sixth Symphony in F Major, you can bet your bottom dollar that the very last sound you hear will be a solid, happy F Major chord. It's like the title of a book telling you exactly where the story will lead you back to!
                </p>

                <img src={art9} className="article-img-slim"/>

                <h2>Mode vs. Key</h2>
                <p>
                    It might look like Mode and Key are the same thing, but they actually do two different jobs in music.
                </p>

                <h3>The Mode is the "Pattern"</h3>
                <p>
                    A mode is a specific pattern of steps. When you follow a certain pattern, it creates a specific mood. For example, the Major mode always sounds bright and happy because of the way the notes are spaced out. The Minor mode sounds darker or sadder because the pattern of steps is different. There are many other patterns (like Dorian or Phrygian) that create different feelings.
                    To understand why a mode sounds the way it does, we have to look at the pattern of steps used to build it. In music, we move between notes using two types of distances: Tones (Whole Steps) and Semitones (Half Steps).
                </p>
                <ul>
                    <li>The Major Mode Pattern: <strong>T - T - S - T - T - T - S</strong></li>
                    <li>The Minor Mode Pattern: <strong> T - S - T - T - S - T - T</strong></li>
                </ul>

                <p>
                    <strong>Mode</strong> is the name for the system itself. If you just have the "recipe" but haven't picked a starting note yet, you have a mode.
                </p>

                <p>
                   A <strong>Key</strong> is what happens when you apply one of those patterns to a specific note on an instrument.
                    If you start the "Major Pattern" on the note C, you are in the Key of C Major. If you start that exact same pattern on the note G, you are in the Key of G Major. The pattern stays the same, but the "pitch level" (how high or low the music sounds) changes because you started on a different note.
                </p>

                <h3>How they work together? </h3>
                <p>
                    Mode tells you the type of scale (Major, Minor, etc.). Key tells you the name of the first note (C, G, F#, etc.). Think about the word "Major." By itself, "Major" is just a mode (a system of sounds). It doesn't tell a piano player which notes to hit yet. But when you say "G Major," you have created a key. Now the piano player knows two things:
                </p>
                <ul>
                    <li>1. They must start on the note G.</li>
                    <li>2. They must use the Major pattern of steps.
                    </li>
                </ul>

            </section>

        </main>
    );
}