import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

export default function Policy() {

    return (
        <section className="service">
            <div className="service__container">
                     <h1 className="service__title">
                    Lesson Cancellation & Booking Policy
                </h1>
                
                <div id="policy" className="service__grid">

                    <article className="service__card">
                        <h3>Payments</h3>
                        <ul>
                            <li>Lessons may be paid in <strong>cash</strong> or via <strong>Venmo, PayPal, or Zelle</strong>.
                                If you prefer to pay with cash, please notify me before your scheduled lesson so we can make the necessary arrangements.
                            </li>
                            <li>Payment is due at the time of each lesson unless otherwise arranged. For students on a weekly or monthly plan, payment is due at the beginning of each billing period.</li>
                            <li>
                                <strong>Monthly Payment (Preferred): </strong> For consistent scheduling and commitment, I highly prefer payment for a full month of lessons in advance.
                            </li>
                            <li>
                                <strong>Per-Lesson Payment: </strong> I understand that flexibility is important, especially when you are just starting out. You may choose to pay per lesson for trial lessons or special circumstances. Please discuss this option with me directly.
                            </li>
                        </ul>
                    </article>

                    <article className="service__card">
                        <h3>Cancellations & Missed Lessons</h3>
                        <ul>
                            <li>Please provide at least  <strong>24 hours’ notice</strong> if you need to cancel a lesson. If you cancel or reschedule more than 24 hours before your scheduled time, there will be no charge.
                            </li>
                            <li>
                                Lessons canceled with less than 24 hours’ notice, or missed without notice, are <strong>charged in full</strong>.
                                Payment for missed lessons is due at your next scheduled session.
                            </li>
                            <li>
                                <strong>Grace Policy: </strong>
                                Each student is allowed one late cancellation per semester without charge. This helps accommodate unexpected situations while keeping scheduling fair for everyone.
                            </li>
                            <li><strong>Tardiness: </strong>
                                If a student arrives late, the lesson will still end at the scheduled time. This ensures fairness to the next student.</li>
                            <li><strong>Instructor Cancellations: </strong>
                                If I need to cancel a lesson, it will be rescheduled or credited in full. </li>
                        </ul>
                    </article>

                </div>

                <p className="disclaimer">
                    I value both your time and mine, and since each lesson time is reserved exclusively for you and cannot be offered to another student if canceled late, this policy helps protect our schedule and allows me to continue providing the best possible experience for all students.
                </p>
            </div>
        </section>
    );
}