import "./Articles.css";
import Header from "./header/Header";
import FooterBtn from "../sections/footer-btn/FooterBtn";


export default function Article18() {
    return (
        <main className="post">
            <Header
                title="Music Theory: The First Steps"
                date="Feb 9, 2026"
            />

            <section className="article-content">
                <h2>What is Pitch?</h2>
                <p>
                    Pitch is how we describe how high or low a sound is and how notes relate to one another. It's what helps us understand a melody: Is the music climbing up like a ladder, or is it sliding down? Does it move in small steps, or does it take giant leaps?
                </p>

                <h2>The Music Staff</h2>
                <p>
                    To keep track of these sounds, we write them down using musical notation. Just like we use letters to build words on a page, musicians use a staff (or stave) to read notes. The staff is made of five horizontal lines and four spaces, looking a bit like a tiny ladder for music. You can think of these notes as little potatoes with tails—or beads, bubbles, or even tomatoes! These "potatoes" tell a story based on where they sit:
                </p>

                <ul>
                    <li><strong>Height</strong>
                        Their position on the lines tells you exactly how high or low the sound should be. When a note sits high up on the staff, it sounds bright and squeaky; when it sits low, it sounds deep and rumbly. </li>
                    <li><strong>Value:</strong>
                        Their shape (and those little tails!) tells you the rhythmic "value," or how long that sound should last.</li>
                </ul>

                <h3>Ledger Lines: The Extra Shelves</h3>
                <p>
                    A piano has 88 different notes, but we draw them on a staff of only 5 lines. What happens when the music goes higher than the ladder or lower than the floor? That's where <strong>ledger lines</strong>come in. These are like little extra shelves we draw specifically for a single note to sit on when it runs out of room.
                </p>

                <h2>The Musical Clefs</h2>
                <p>
                    However, there is a limit! If a melody stays really high or really low for a long time, it becomes messy to read. It would look like your potatoes are floating away into space! To keep things clean, we use Clefs. A Clef is a special symbol at the very beginning of the staff. It acts like a "You Are Here" sign on a map. It locks onto one specific line and tells you exactly what that note is. Once you know that one note, you can find all the others!
                </p>

                <ul>
                    <li><strong>The Treble Clef: </strong>
                        Also called the <strong>G-Clef</strong>. It looks like a fancy, curvy swirl that wraps around the second line of the staff. This tells the musician, "This line is the note G." It's used for high sounds like flutes, violins, or the right hand on a piano.</li>
                    <li><strong>The Bass Clef: </strong>
                        Also called the <strong>F-Clef</strong>. It looks a bit like a comma with two dots. The two dots sit on either side of the fourth line, telling the musician that this line is the note F. It's used for deep sounds like tubas, cellos, or the left hand on a piano.</li>
                </ul>

                <h3>The "Middle C" Bridge</h3>
                <p>
                    Even though they look different, these two clefs work together! They connect at a special note called <strong>Middle C</strong>. In the Treble Clef, Middle C lives on a ledger line just <italic>below</italic> the staff. In the Bass Clef, it lives on a ledger line just <italic>above</italic> the staff. Because they share this note, the two clefs join together to create a giant 11-line system called the<strong>Grand Staff</strong>. This lets us write huge ranges of music—from the lowest rumbles to the highest whistles—all in one place!
                </p>

                <h2>Note Values</h2>
                <p>
                    Finally, the <italic>shape</italic> of the note tells us how long to hold it. A hollow circle (Whole Note) lasts a long time, while a filled-in circle with a stick (Quarter Note) sounds like a steady walking step.
                </p>

            </section>
        </main>
    );
}