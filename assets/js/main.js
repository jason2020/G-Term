/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
var text = [
	["Uly Borek ‘20", "Yes, I like G-Term. I think it’s an exciting transition to the second semester of the school year and it gives you the opportunity to pursue something new that you couldn’t normally pursue in the standard curriculum. Yes, I would rather have G-Term than a longer break. It’s a more effective transition than an extra week would be. I think it’s best placed where it is right now (right before second semester). The first G-Term I did was Art of Problem Solving, it was kind of like a competitive math based G-Term. It was a lot of fun, and it was kind of interesting because you could pursue math in a way you don’t normally see in math class. I also did Innovation and Entrepreneurship and we went to Boston, which was a lot of fun. Being able to go on a field trip with your friends is a very interesting and valuable experience."],
	["Grant Nakanishi ‘20", "Nah, I don’t really like G-Term. If you get stuck in a bad G-Term then it sucks. But if you get stuck in a good G-Term then it’s good because it’s not really school. I guess G-Term could be good and bad in that sense. I didn’t really learn anything from G-Term. I think it’s in the best spot right now because if it was at the end of the year then it would be really bad. I would rather have a longer break for sure than G-Term. I think the way they assign people to their G-Term courses is fair because I don’t see a better way of doing it."],
	["Ethan Furuya ‘20", "No, I don’t like G-Term. Some of them are pretty boring and we could be having more break or doing more productive things and last year my G-Term was a waste of time. I learned nothing from G-Term. I would rather not have G-Term ever. Yeah I think the way they assign G-Term courses is fair but I didn’t sign up last year so I got a bad G-Term. This year I got my top pick, though: Punahou Ninja Warrior."],
	["Trevor Komeiji ‘20", "I like the spirit of G-Term but not G-Term itself. Well, this past year, I unfortunately got injured in G-Term, it took me out of track. It was partially both (my fault and G-Terms) I didn’t recognize that I would get hurt. I had fun in the moments, but not after. I learned that I need to make choices that affect my future in a good way, not a bad way. Honestly, I’d rather have G-term than another week of school, helps me get back into it. I like the placement of G-term right now, it helps me ease myself back into school."],
	["Bryce Okihiro ‘20", "not particularly (I do not like G-Term). I guess I prefer it over school, like academics, but it kinda ruins my day, when I go to G-term. These past 3 years I haven’t been with any of my peers pretty much, so it’s been like all freshman and sophomores and it hasn’t been very enjoyable. What do you mean is it my fault? I don’t get to choose what class I’m in really. You know how they give the sub category with the extra option? I got the extra option, like 2 years. No. Maybe temporary friends, but not lasting friends. I guess it’s in a good spot. Yeah."],
	["Mr. Comstock", "I do the Food Writing G-Term. Yeah I like it; it’s fun; I enjoy it. I think G-Term can be a meaningful experience, depending on the attitude of not only the teacher but also the students involved. I think that some students maybe go into it with not a great attitude. They might think “oh, I have to be here for an extra week, why not just extend my break.” They should remember that without G-Term they would have another week of classes not break. The whole point of G-Term is to sign up for something you’re interested in. I think if you go into it with the right attitude then it can be a really cool experience to get you hands-on learning that you cannot get in the classroom. I think the current placement of G-Term works, like the students are coming back from winter break and they might not want to jump back into the second semester. It helps them transition in a gradeless environment, where there’s less pressure. So, I think it’s probably better than having it at the beginning of the year, and I really don’t think it would be good at the end of the year. All the students will have checked out by then and just blow it off. So, I think it’s best placed as of right now with our current structure. I think we have G-Term so that students can have a learning experience in a gradeless environment and get real hands-on learning. I am a big fan of experiential learning, of getting students out of the classroom into real-world scenarios where they can practice what they learned. In Food Writing, we can practice our writing all day long but if we are not going out and having restaurant experience as a class where the teacher is with you that is not as meaningful as it could be. And so I think that makes it much more real and having that experience makes it feel more practical and more applicable to a student’s life, and probably more memorable. Yeah, so I like G-Term, I think it’s a good idea. I personally was asked by another teacher to join her in teaching Food Writing. In my first year here, though, I did not start my own G-Term but they asked me to help with Sightseeing on a Budget, were each student was given like 15 dollars and then we rode the bus to the ice rink, and went to Chinatown another day. That one I was assigned to. Most teachers pitch in an idea and if it gets approved, they can use their creativity to do whatever they want. Students can lead G-Terms as well. I thought about other ones I would want to do, but I am happy with Food Writing for now. But in the future, I might consider pitching my own idea, a travel G-Term would be a lot of fun but also a lot of work."],
	["Dr. Christensen","For the last few years, Ms. Chaney and I have taught “May I Please the Court?”, looking at the law but this we’re teaching “Race and Identity in Popular Film”. Did I like it? It was a lot of work. It was educational I think, it had some advantages. Are you trying to get me in trouble? I think G-Term is a lot of work. I think we have G-Term because the administration wanted to have exams before Christmas, and then if you want to create even semesters, there was a gap of time, and we either just had a super long second semester or we would change the date of graduation which would [expletive] tradition right, so they added in an extra week of G-Term, for logistical reasons, I would say. That’s my understanding."],
	["Ms. Coke", "The G-Term is “Active Science in Yellowstone and the Grand Teton National Parks”. Last year we had “Active Science in the Grand Canyon, Zion and Bryce National Parks” and before that Mr. Gaudiano and I spent, I think about a decade taking students to the Big Island and doing active science there. I do, yeah it’s fun. Every experience I’ve had with G-Term has been a meaningful experience, I put a lot of effort into it. I don’t know. I’ve been doing field trips anyway, so it’s a nice place to put a field trip, but I’m not sure. It has been a positive experience for me, but I’m also in a unique position where I plan field trips every year anyway, so it’s not extra work for me. I’m actually getting more support now than I would have before, but I think planning field trips is very very work intensive, so if I had not had all these field trips under my belt and I wasn't planning on doing one every year anyway, it would be a lot of extra work dumped on my lap, so i think my unique position makes it benefit me personally but I don't think my experience is the norm and I don't want to speak for other people."]
];

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	$("a.image").click(function() {
		console.log("HEY");
		$("#modal-content").html("<div id='close'>&times;</div><h2 id='modalHeader'>" + text[$(this).attr("value") - 1][0] + "</h2><blockquote id='modal-text'>" + text[$(this).attr("value") - 1][1]+ "</blockquote>");
		$("#modal").css("display", "block");
		$("#close").click(function() {
			$("#modal").css("display", "none");
		})
	});
	window.onclick = function(event) {
		console.log(event.target,event.target.className);
		if (event.target.id != modal && event.target.className != "image fit") {
			$("#modal").css("display", "none");
		}
	}
	
	Chart.defaults.global.defaultFontColor = 'white';
	var ctx = document.getElementById('myChart');
	var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
		datasets: [{
			label: '# of Votes',
			data: [2, 1, 2, 1, 2, 2, 4, 3, 4, 5],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(230, 140, 182, 0.2)',
				'rgba(94, 152, 235, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(190, 180, 110, 0.2)',
				'rgba(54, 162, 255, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(200, 122, 110, 0.2)'
				
			],
			borderColor: [
				'rgba(230, 120, 142, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(230, 140, 182, 1)',
				'rgba(94, 152, 235, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(190, 180, 110, 1)',
				'rgba(54, 162, 255, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(200, 122, 110, 1)'
				
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		title: {
            display: true,
            text: 'Did you enjoy your G-Term Experience?'
        }
	}
	});

	ctx = document.getElementById('myChart2');
	var myDoughnutChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ["Yes", "No"],
			datasets: [{
				label: '# of Votes',
				data: [21, 5],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(190, 180, 110, 0.2)'
				]
			}]
		},
		options: {
			title: {
	            display: true,
	            text: 'Did you get one of the G-Terms you wanted? (on your preferred list)'
       		}
		}
	});

	ctx = document.getElementById('myChart3');
	var myChart2 = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['1', '2', '3', '4', '5'],
		datasets: [{
			label: '# of Votes',
			data: [3, 8, 7, 7, 1],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
				
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
				
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		title: {
            display: true,
            text: 'How do you evaluate the selection process?'
        }
	}
	});

	ctx = document.getElementById('myChart4');
	var myChart2 = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['1', '2', '3', '4', '5'],
		datasets: [{
			label: '# of Votes',
			data: [2, 4, 10, 9, 1],
			backgroundColor: [
				'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
				
			],
			borderColor: [
				'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
				
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		},
		title: {
            display: true,
            text: "How valuable were your G-Term experiences? (Overall, not just last year's)"
        }
	}
	});

	ctx = document.getElementById('myChart5');
	var pieChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ["Yes", "No"],
			datasets: [{
				label: '# of Votes',
				data: [1, 25],
				backgroundColor: [
					'rgba(190, 180, 110, 0.2)',
					'rgba(255, 99, 132, 0.2)'
				]
			}]
		},
		options: {
			title: {
	            display: true,
	            text: 'Would you rather G-Term be replaced with normal school? (School would start when G-Term does)'
       		}
		}
	});

})(jQuery);


