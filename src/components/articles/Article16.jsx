import React from "react";
import Header from "./header/Header";
import "./Articles.css";

export default function Article16() {
    return (

        <main className="post">

            <Header
                title="From Bumps to Beats: Understanding Sound and Music"
                date="Feb 2, 2026"
            />

            <section className="article-content">
                <h3>What is Sound?</h3>
                <p>Sound is a form of energy produced by vibrations that travel through mediums like air, water, or solids as longitudinal pressure waves. When an object vibrates, it creates compressions (squished-together air) and rarefactions (stretched-out air) in surrounding molecules, which our
                    <a className="text-link"
                        href="https://www.youtube.com/watch?v=GhK9gXztVSs"
                        target="_blank"
                        rel="noopener noreferrer"> ears
                    </a> detect and our brains interpret as sound.</p>
                <p>Sound waves are characterised by:</p>
                <ul>
                    <li><strong>Loudness (Amplitude): </strong>
                        Measured in decibels (dB)</li>
                    <li><strong>Pitch (Frequency): </strong>
                        Measured in hertz (Hz).</li>
                </ul>

                <p>The speed of sound depends on the material it travels through and the temperature. In physics, sound intensity is proportional to the square of the sound pressure level.</p>

                <img src="/images/art4.gif" className="article-image" />

                <p>
                    In other words, sound is just energy making a "neighbor-bump" through the air.  If the bumps are fast, the pitch is high. If the bumps are big, the sound is loud. If there's no air (or anything else) to bump, there's no sound at all!

                </p>
                <p className="tips">
                    Imagine a long line of dominoes. When you push the first one, it hits the second, which hits the third, and so on. The dominoes don't actually move across the room—they just bump into their neighbor and stay put. Sound works the same way! When you clap your hands, you "push" the air molecules nearby. Those molecules bump into the ones next to them and then bounce back.
                </p>

                <h3>Sound vs. Music Sound</h3>
                <p>What is the difference between a "noise" and a "musical sound"? You can think of it like the difference between a <strong>parade</strong> and a <strong>crowd</strong>.</p>
                <p>
                    Musical sound is a vibration that is organised. It has a "steady heartbeat." The vibrations are very neat and regular, like someone jumping rope at the exact same speed. If you can hum a note or sing along with it, it's a musical sound!
                </p>
                <p>
                    Regular sound, or "noise," is disorganised. Imagine a busy playground at recess. Some kids are running, some are shouting, and some are jumping. There is no rhythm or pattern, so it doesn't have a specific note. Noise's vibrations are wild and uneven—like a hundred people jumping rope all at different speeds. Crinkling paper, a car engine, or rain hitting the roof are all "noise." A door slam or a vacuum cleaner are just regular sounds because they aren't organised into a melody.

                </p>
                <p>
                    Finally, there are plenty of "hidden" sounds that we are unable to detect because they are too high or too low for human ears to hear:
                </p>
                <ul>
                    <li><strong>Infrasounds: </strong>
                        These are sounds that are too low and deep for us to hear, like the low rumbles created by whales or the vibrations from an earthquake.</li>
                    <li><strong>Ultrasounds: </strong>
                        These are sounds that are too high for us to hear. Animals like bats and dolphins use these "invisible" sounds to find their way around and hunt for food.</li>
                </ul>

                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/En4Wlojjgxk?si=81WTzPDoxZLdMxdZ" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>


                <h3>Musical Sound</h3>
                <p>
                    Musical sound is special because it is a "regular" vibration with a fixed pitch, unlike messy noise. To make music, every sound has four main "superpowers" that help our ears tell them apart:
                </p>
                <ul>
                    <li><strong>Pitch (How high or low?): </strong>
                        This is determined by how fast something vibrates. Fast vibrations make a high, squeaky note like a flute. Slow vibrations make a low, rumbly note like a tuba.</li>
                    <li><strong>Loudness (How strong?): </strong>
                        This is the "volume" of the sound, determined by how big the vibrations are. A big, strong push makes a loud sound, while a tiny wiggle makes a soft whisper.</li>
                    <li><strong>Duration (How long?): </strong>
                        This is simply how long the sound lasts. It depends on how long the object keeps wiggling! A short "staccato" note is like a quick hop, while a long note is like a deep breath.</li>
                    <li><strong>Timbre (The "Color" of sound): </strong>
                        Timbre (pronounced tam-ber) is what makes a piano sound different from a violin, even if they play the exact same note. * It depends on what the instrument is made of (wood or metal) and how you play it (hitting, blowing, or plucking).</li>
                </ul>
            </section>
        </main>
    );
}
