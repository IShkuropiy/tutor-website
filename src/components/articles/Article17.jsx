import "./Articles.css";
import Header from "./header/Header";
import FooterBtn from "../sections/footer-btn/FooterBtn";

export default function Article17() {
    return (
        <main className="post">
            <Header
                title="Rhythm: The Heartbeat of Music"
                date="Feb 6, 2026"
            />

            <section className="article-content">

                <p>
                    Rhythm is the heartbeat of music. Just like a heartbeat, it is marked by a steady, regular pulse called the <strong>beat</strong>. These beats are grouped into patterns called <strong>measures</strong>  (or bars), which are separated by vertical bar lines. The number of beats within these measures is determined by the <strong>meter</strong>. Meter describes how beats are organized and emphasized. While there are many types of meters, they generally fall into three main categories:
                </p>

                < img src="/images/marktime.png" className="article-img-slim" />


                <h3> Duple Meter (2/4 time)</h3>
                <p>
                    Duple meter consists of two beats per measure and follows a strong-weak pattern. It feels lively, marching, or dancing, and is often found in marches and energetic folk music.
                </p>

                <p className="italic">Listen to the following examples in 2/4 time:</p>

                <ul>
                    <li>
                        <a className="text-link"
                            href="https://youtu.be/OQlByoPdG6c?si=r2Aq9wITLWoOWUiz"
                            target="_blank"
                            rel="noopener noreferrer"> The Tokens
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://youtu.be/zV1qLYukTH8?si=dcrjiS1FPQjV1JOz"
                            target="_blank"
                            rel="noopener noreferrer"> Dance of the Sugar Plum Fairy from the Nutcracker
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://youtu.be/RGAPTRrAilY?si=JONvSYSSoHelTdws"
                            target="_blank"
                            rel="noopener noreferrer">  Turkish March
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=LdH1hSWGFGU"
                            target="_blank"
                            rel="noopener noreferrer"> Rhapsodie Hongroise No. 2
                        </a>
                    </li>
                </ul>

                <h3> Triple Meter (3/4 time)</h3>
                <p>
                    Triple meter consists of three beats per measure, following a Strong-weak-weak pattern. Primarily linked to dances like the Waltz, Mazurka, and Polonaise, it feels swaying, graceful, and circular.
                </p>

                <p className="italic">Below are examples of pieces written in 3/4 time:</p>

                <ul>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=OPfO97EpLRk"
                            target="_blank"
                            rel="noopener noreferrer"> Dvorák - Serenade for Strings in E Major, Op. 22, B. 52: II. Tempo di valse
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://youtu.be/zV1qLYukTH8?si=dcrjiS1FPQjV1JOz"
                            target="_blank"
                            rel="noopener noreferrer"> Dance of the Sugar Plum Fairy from the Nutcracker
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=7KIHvuMl4Kk"
                            target="_blank"
                            rel="noopener noreferrer"> The Stranglers - Golden Brown
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=WVsGf1ag6Us&list=RDWVsGf1ag6Us&start_radio=1"
                            target="_blank"
                            rel="noopener noreferrer"> Chopin Waltz Op.64 n.2
                        </a>
                    </li>
                </ul>

                <h3>Quadruple Meter (4/4 time)</h3>
                <p>
                    Quadruple meter consists of four beats per measure. It is often denoted by a "C" symbol, standing for Common Time. As the most versatile meter, it is used in everything from Classical to Rock, Jazz, and Latin dances like Tango and Bachata. The feel is steady, balanced, and "walking." The primary accent falls on beat 1 (the downbeat), with a secondary, weaker accent on beat 3. Beats 2 and 4 are the "off-beats," with beat 4 usually being the weakest as it leads back to the start of the next measure.
                </p>
                <p>
                    While it can be hard to distinguish duple from quadruple at first, listen for the "weight" of the beats. Duple (1-2, 1-2) feels like a left-right-left-right march. Quadruple (1-2-3-4) feels broader and more anchored.
                </p>

                <p className="italic">The following pieces are written in 4/4 time:</p>

                <ul>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=NmS3m0OG-Ug"
                            target="_blank"
                            rel="noopener noreferrer"> Severance
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=77PsqaWzwG0&list=RD77PsqaWzwG0&start_radio=1"
                            target="_blank"
                            rel="noopener noreferrer"> Succession
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=SyDo3h1Tu7c&list=RDSyDo3h1Tu7c&start_radio=1"
                            target="_blank"
                            rel="noopener noreferrer"> Prokofiev Dance of the Knights
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=x2IYc576nbo&list=RDx2IYc576nbo&start_radio=1"
                            target="_blank"
                            rel="noopener noreferrer"> Quizas, Quizas, Quizas
                        </a>
                    </li>
                    <li>
                        <a className="text-link"
                            href="https://www.youtube.com/watch?v=Qho8VHhRkyU"
                            target="_blank"
                            rel="noopener noreferrer"> Smiling Friends
                        </a>
                    </li>
                </ul>

                <h3>Reading the Time Signature</h3>

                <p>
                    The time signature appears at the beginning of a piece of music, immediately following the clef and key signature. It consists of two numbers stacked vertically:
                </p>

                <ul>
                    <li><strong>The Top Number</strong>
                        (How Many) indicates the number of beats in each measure. If it's a 3, you count "1, 2, 3" before the next bar line.</li>
                    <li><strong>The Bottom Number</strong>
                        (Which Note) tells you the value of note that represents one full beat. This number is always a power of 2 (2, 4, 8, 16).</li>
                </ul>
                <p>
                    For example, in 3/4 time, there are three beats per measure, and the quarter note is the one you are tapping your foot to. In 6/8 time, there are six beats per measure, and the eighth note gets the pulse.
                </p>

                <p><strong>Syncopation</strong> This is when the "weak" beats (or the spaces between beats) are accented instead of the strong beats. This is what creates "groove" in Jazz, Funk, and Reggae.
                </p>

                <h2>Further Reading:</h2>
                <ul>
                    <li>
                       <a className="text-link"
                            href="https://musictheory.pugetsound.edu/mt21c/BasicsOfRhythm.html"
                            target="_blank"
                            rel="noopener noreferrer"> Basics of Rhythm
                        </a> 
                    </li>

                    <li>
                       <a className="text-link"
                            href="https://mymusictheory.com/rhythm/time-signature-chart/"
                            target="_blank"
                            rel="noopener noreferrer"> Time Signature Chart
                        </a> 
                    </li>
                </ul>

                 <FooterBtn pdfUrl="/public/time.pdf" />

            </section>
        </main>

    );
}