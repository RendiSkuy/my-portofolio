import React, { useEffect, useRef, useState } from "react";

const GITHUB_USERNAME = "RendiSkuy";

const GitHubContributions = () => {
    const [contributions, setContributions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalContributions, setTotalContributions] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
                );
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                setContributions(data.contributions);
                // API returns { total: { lastYear: N } } for y=last
                const total = data.total?.lastYear ?? Object.values(data.total ?? {})[0] ?? 0;
                setTotalContributions(total);
            } catch {
                // silently fail
            } finally {
                setLoading(false);
            }
        };
        fetchContributions();
    }, []);

    if (loading) {
        return (
            <div className="gh-contrib-card">
                <div className="gh-contrib-skeleton">
                    {Array.from({ length: 53 }).map((_, wi) => (
                        <div key={wi} className="gh-contrib-skeleton-col">
                            {Array.from({ length: 7 }).map((_, di) => (
                                <div key={di} className="gh-contrib-skeleton-cell" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (!contributions) return null;

    // Build weeks: group days into columns of 7 (Sun→Sat)
    const weeks = [];
    let currentWeek = [];

    contributions.forEach((day, i) => {
        if (i === 0) {
            const dow = new Date(day.date).getDay();
            for (let p = 0; p < dow; p++) currentWeek.push(null);
        }
        currentWeek.push(day);
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });
    if (currentWeek.length > 0) {
        while (currentWeek.length < 7) currentWeek.push(null);
        weeks.push(currentWeek);
    }

    // Month labels — show on first week of each month
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthPositions = [];
    weeks.forEach((week, wi) => {
        const firstDay = week.find(d => d !== null);
        if (!firstDay) return;
        const d = new Date(firstDay.date);
        if (d.getDate() <= 7) {
            // Avoid duplicating the same month if it already exists
            const last = monthPositions[monthPositions.length - 1];
            if (!last || last.month !== monthNames[d.getMonth()]) {
                monthPositions.push({ week: wi, month: monthNames[d.getMonth()] });
            }
        }
    });

    const levelColors = [
        "var(--gh-c0)",
        "var(--gh-c1)",
        "var(--gh-c2)",
        "var(--gh-c3)",
        "var(--gh-c4)",
    ];

    return (
        <div className="gh-contrib-card" ref={containerRef}>
            {/* Month labels row */}
            <div className="gh-month-row" style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}>
                {weeks.map((_, wi) => {
                    const label = monthPositions.find(m => m.week === wi);
                    return (
                        <div key={wi} className="gh-month-cell">
                            {label ? label.month : ""}
                        </div>
                    );
                })}
            </div>

            {/* Contribution grid */}
            <div className="gh-grid" style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}>
                {weeks.map((week, wi) =>
                    week.map((day, di) => (
                        <div
                            key={`${wi}-${di}`}
                            className="gh-cell"
                            style={{
                                gridRow: di + 1,
                                gridColumn: wi + 1,
                                backgroundColor: day ? levelColors[day.level] : "transparent",
                            }}
                            title={
                                day
                                    ? `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${day.date}`
                                    : ""
                            }
                        />
                    ))
                )}
            </div>

            {/* Footer: count + legend */}
            <div className="gh-footer">
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-count"
                >
                    {totalContributions} contributions in the last year
                </a>
                <div className="gh-legend">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map(l => (
                        <div key={l} className="gh-legend-cell" style={{ backgroundColor: levelColors[l] }} />
                    ))}
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

export default GitHubContributions;
