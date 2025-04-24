"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react'

export default function Schedule() {
  const [activeDate, setActiveDate] = useState("August - 21st | Registration")

  const scheduleData = [
    {
      date: "August - 21st | Registration",
      items: [
        { time: "8:00AM - 9:15AM", title: "Registration" },
        { time: "9:15AM - 9:30AM", title: "Inaugural Function" },
        { time: "9:30AM - 10:00AM", title: "Keynote Speech (Session 1)" },
        { time: "10:00AM - 10:15AM", title: "Coffee Break" },
        { time: "10:15AM - 10:30AM", title: "Introduction to the Session Chairs" },
        { time: "10:30AM - 01:00PM", title: "1st Session" },
        { time: "01:00PM - 02:00PM", title: "Lunch Break" },
        { time: "02:00PM - 02:30PM", title: "Keynote Speech" },
        { time: "2:30PM - 5:00PM", title: "2nd Session" },
      ],
    },
    {
      date: "August - 22nd | Closing Day",
      items: [
        { time: "9:00AM - 9:30AM", title: "Registration" },
        { time: "9:30AM - 10:00AM", title: "Closing Ceremony Opening Remarks" },
        { time: "10:00AM - 11:00AM", title: "Final Keynote Speech" },
        { time: "11:00AM - 11:15AM", title: "Coffee Break" },
        { time: "11:15AM - 12:45PM", title: "Panel Discussion: Future of Sustainability" },
        { time: "12:45PM - 2:00PM", title: "Networking Lunch" },
        { time: "2:00PM - 3:30PM", title: "Workshops and Breakout Sessions" },
        { time: "3:30PM - 4:00PM", title: "Closing Remarks and Next Steps" },
        { time: "4:00PM - 5:00PM", title: "Farewell Reception" },
      ],
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md mb-6">
              <span>NextGenSynergy 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Conference Schedule
            </h1>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-purple-100/90">
              Explore the full program of events for NextGenSynergy 2025
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="relative backdrop-blur-sm bg-purple-900/20 rounded-3xl border border-purple-400/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-purple-900/70">
                      <Calendar className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Conference Calendar</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {scheduleData.map((day, index) => (
                    <div
                      key={index}
                      className={`relative backdrop-blur-sm rounded-2xl border overflow-hidden p-6 group transition-all cursor-pointer ${
                        activeDate === day.date
                          ? "bg-purple-900/40 border-purple-400/40"
                          : "bg-purple-900/20 border-purple-400/20 hover:bg-purple-900/30"
                      }`}
                      onClick={() => setActiveDate(day.date)}
                    >
                      <div
                        className={`absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 ${
                          activeDate === day.date ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                        }`}
                      ></div>

                      <div className="relative">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold text-white">{day.date.split("|")[0]}</h3>
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              activeDate === day.date
                                ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500"
                                : "bg-purple-800/50"
                            }`}
                          >
                            {activeDate === day.date ? (
                              <ChevronUp className="h-5 w-5 text-white" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-white" />
                            )}
                          </div>
                        </div>

                        <p className="text-purple-100/70 mt-1">{day.date.split("|")[1]}</p>

                        <div className="mt-4 space-y-2">
                          {day.items.slice(0, activeDate === day.date ? 3 : 2).map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3">
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-800/50 text-purple-100 mt-0.5">
                                <Clock className="h-3 w-3" />
                              </div>
                              <div>
                                <p className="text-sm text-purple-100/70">{item.time}</p>
                                <p className="text-white">{item.title}</p>
                              </div>
                            </div>
                          ))}

                          {activeDate !== day.date && day.items.length > 2 && (
                            <div className="text-sm text-cyan-400 mt-2">+ {day.items.length - 2} more events</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">Conference Highlights</h3>
                  <p className="text-purple-100/80">
                    Join us for two days of inspiring keynotes, interactive sessions, and networking opportunities.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-1">
                      2
                    </div>
                    <div className="text-purple-100/80">Days</div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-purple-300 mb-1">
                      4
                    </div>
                    <div className="text-purple-100/80">Keynotes</div>
                  </div>

                  <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl border border-purple-400/20 p-4">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-1">
                      18
                    </div>
                    <div className="text-purple-100/80">Sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
              Detailed Schedule
            </h2>

            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

            <div className="inline-flex rounded-full p-1 bg-purple-900/40 backdrop-blur-sm border border-purple-400/20">
              {scheduleData.map((day, index) => (
                <Button
                  key={index}
                  variant={activeDate === day.date ? "default" : "ghost"}
                  className={`rounded-full px-6 ${
                    activeDate === day.date
                      ? "bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white"
                      : "text-purple-100 hover:text-white"
                  }`}
                  onClick={() => setActiveDate(day.date)}
                >
                  Day {index + 1}
                </Button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {scheduleData
              .filter((day) => day.date === activeDate)
              .map((day, dayIndex) => (
                <div key={dayIndex} className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-purple-500 mt-12"></div>

                  <h3 className="text-2xl font-bold text-white mb-8">{day.date}</h3>

                  <div className="space-y-6">
                    {day.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="relative">
                        <div className="absolute left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"></div>

                        <div className="ml-16 relative backdrop-blur-sm bg-purple-900/20 rounded-xl border border-purple-400/20 overflow-hidden p-5 group hover:bg-purple-900/30 transition-all">
                          <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>

                          <div className="relative">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <h4 className="text-xl font-medium text-white">{item.title}</h4>
                              <div className="flex items-center gap-2 text-purple-100/70">
                                <Clock className="h-4 w-4 text-cyan-400" />
                                <span>{item.time}</span>
                              </div>
                            </div>

                            {/* Additional content for special sessions */}
                            {item.title.includes("Keynote") && (
                              <div className="mt-3 p-3 bg-purple-900/40 rounded-lg border border-purple-400/10">
                                <p className="text-purple-100/90">
                                  {item.title.includes("Final")
                                    ? "Closing keynote by Dr. Emily Chen on 'The Future of Multidisciplinary Research'"
                                    : "Opening keynote by Prof. Michael Rodriguez on 'Virtual Environments in Scientific Discovery'"}
                                </p>
                              </div>
                            )}

                            {item.title.includes("Panel") && (
                              <div className="mt-3 p-3 bg-purple-900/40 rounded-lg border border-purple-400/10">
                                <p className="text-purple-100/90">
                                  Join industry experts and academic leaders for an engaging discussion on sustainable
                                  practices in research and development.
                                </p>
                              </div>
                            )}

                            {item.title.includes("Session") && !item.title.includes("Chairs") && (
                              <div className="mt-3 p-3 bg-purple-900/40 rounded-lg border border-purple-400/10">
                                <p className="text-purple-100/90">
                                  {item.title.includes("1st")
                                    ? "Paper presentations on Virtual Research Environments and Cross-Disciplinary Methodologies"
                                    : "Paper presentations on AI in Research and Digital Twins & Simulation"}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="relative backdrop-blur-sm bg-purple-900/30 rounded-2xl border border-purple-400/20 overflow-hidden p-6">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-50"></div>

              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-3">Need More Information?</h3>
                <p className="text-purple-100/80 mb-6">
                  Download the complete conference program with detailed session information and speaker bios.
                </p>

                <Button className="bg-gradient-to-r from-cyan-600 to-fuchsia-600 hover:from-cyan-500 hover:to-fuchsia-500 text-white border-0 rounded-lg">
                  Download Full Program
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
