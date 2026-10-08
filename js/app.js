const modules=[
{title:'Problem Solving',topics:[['1.1','Demonstrate Programming Life Cycle (PLC)','The Programming Life Cycle includes problem definition, analysis, design, coding, testing, documentation and maintenance.','Example: For a grade calculator, identify inputs (marks), processing (calculate grade), and output (grade).'],['1.2','Construct problem solving concept','Break a problem into input, process and output (IPO). Use decomposition to solve smaller tasks.','IPO example: Input = two numbers; Process = addition; Output = sum.'],['1.3','Construct the different types of algorithms, pseudocode and flowcharts in solve problem','An algorithm is a finite series of instructions. Pseudocode uses structured plain language; flowcharts use standard symbols such as oval (start/end), parallelogram (input/output), rectangle (process), and diamond (decision).','START\nINPUT a, b\nsum ← a + b\nOUTPUT sum\nEND']]},
{title:'Introduction to Fundamentals of Programming',topics:[['2.1','Construct the C++ program basic structure','A basic C++ program uses #include, main(), statements and return 0.',' #include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello World";\n  return 0;\n}'],['2.2','Construct identifier and data types','Identifiers name variables and functions. Common C++ data types include int, double, char, bool and string.','int age = 18;\ndouble price = 12.50;\nchar grade = \'A\';\nbool passed = true;'],['2.3','Follow the basic step of computer program','Plan the solution, write source code, compile, run and test with different inputs.','Source code → Compiler → Executable → Run → Test'],['2.4','Follow instruction process of compiling and debugging process and errors in programming','Syntax errors violate language rules; runtime errors happen during execution; logic errors produce wrong results. Debugging identifies and corrects them.','Example syntax error: cout << "Hi"  // missing semicolon']]},
{title:'Program Elements',topics:[['3.1','Construct Identifiers','Use meaningful variable names. C++ identifiers cannot begin with a digit, contain spaces or use reserved keywords.','int totalMarks = 90;\n// 2marks and total marks are invalid identifiers'],['3.2','Construct operators and expressions','Arithmetic (+, -, *, /, %), relational (==, !=, >, <, >=, <=), and logical (&&, ||, !) operators form expressions.','int total = 10 + 5;\nbool eligible = (total >= 10) && (total < 20);'],['3.3','Construct input output statements','Use cin to read keyboard input and cout to display output.','int age;\ncout << "Enter age: ";\ncin >> age;\ncout << "Age: " << age;']]},
{title:'Program Control Structure',topics:[['4.1','Construct program control structure','Control structures determine execution order: sequence, selection and repetition.','Sequence: input → calculate → display'],['4.2','Construct selection control structures in problem solving','Use if, if-else or switch to choose actions based on conditions.','if (mark >= 50) {\n  cout << "Pass";\n} else {\n  cout << "Fail";\n}'],['4.3','Construct loops control structure in problem solving','Use for, while or do-while to repeat instructions. Ensure loop conditions eventually terminate.','for (int i = 1; i <= 5; i++) {\n  cout << i << endl;\n}']]},
{title:'Array',topics:[['5.1','Construct array in programming','An array stores multiple values of the same type under one name. C++ array indices start at 0.','int marks[3] = {70, 80, 90};\ncout << marks[0]; // 70\nfor (int i = 0; i < 3; i++) {\n  cout << marks[i] << endl;\n}']]},
{title:'Function',topics:[['6.1','Build functions in programming','A function groups reusable instructions. It may return a value or use void for no return value.','int add(int a, int b) {\n  return a + b;\n}'],['6.2','Build function prototype','A prototype declares a function name, return type and parameter types before its definition.','int add(int a, int b);\nint main() {\n  cout << add(2, 3);\n}\nint add(int a, int b) { return a + b; }'],['6.3','Build parameters passing techniques','Pass by value copies the argument; pass by reference (&) lets a function modify the original variable.','void increase(int &x) {\n  x++;\n}\nint number = 5;\nincrease(number); // number becomes 6']]}];

// Modul 1: nota dwibahasa, rajah, latihan dan aktiviti pengukuhan.
const richModule1 = [
`<div class="learning"><div class="lesson-tag">TOPIC 1.1 · PROGRAMMING LIFE CYCLE</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>At the end of this topic, students should be able to <b>describe the phases of the Programming Life Cycle, identify deliverables at each phase, and apply PLC to a simple C++ problem</b>. / Pada akhir topik, pelajar dapat menerangkan fasa PLC, mengenal pasti hasil setiap fasa dan mengaplikasikannya.</p>
<h3>1.1.1 Definition / Definisi</h3><p><b>Programming Life Cycle (PLC)</b> is a systematic, iterative process for planning, designing, developing, testing and maintaining a computer program. / PLC ialah proses sistematik dan berulang untuk merancang, mereka bentuk, membangunkan, menguji dan menyelenggara program komputer.</p>
<div class="note"><b>Remember / Ingat:</b> PLC helps programmers reduce errors and ensure the program meets user requirements. Some textbooks group or name the phases differently; the core activities remain similar.</div>
<h3>1.1.2 PLC phases / Fasa-fasa PLC</h3>
<table class="ipo"><thead><tr><th>Phase / Fasa</th><th>Key activity / Aktiviti</th><th>Deliverable / Hasil</th></tr></thead><tbody>
<tr><td>1. Problem Definition</td><td>Understand the task and requirements / Fahami masalah</td><td>Problem statement</td></tr>
<tr><td>2. Problem Analysis</td><td>Identify inputs, processing, outputs and constraints / Kenal pasti IPO dan syarat</td><td>IPO table</td></tr>
<tr><td>3. Program Design</td><td>Prepare algorithm, pseudocode and flowchart / Rancang penyelesaian</td><td>Algorithm or flowchart</td></tr>
<tr><td>4. Coding</td><td>Translate the design into C++ / Tulis kod sumber</td><td>Source code (.cpp)</td></tr>
<tr><td>5. Testing &amp; Debugging</td><td>Run test cases, find and fix errors / Uji dan baiki ralat</td><td>Test results</td></tr>
<tr><td>6. Documentation</td><td>Record instructions and decisions / Sediakan dokumentasi</td><td>User/technical notes</td></tr>
<tr><td>7. Maintenance</td><td>Correct, adapt and improve the program / Selenggara program</td><td>Updated program</td></tr></tbody></table>
<div class="process-flow"><span>Define</span><b>→</b><span>Analyse</span><b>→</b><span>Design</span><b>→</b><span>Code</span><b>→</b><span>Test</span><b>→</b><span>Document</span><b>→</b><span>Maintain</span></div>
<h3>1.1.3 Worked Example / Contoh Berpandu</h3><p><b>Scenario:</b> A college wants a program that determines whether a student passes based on a mark from 0 to 100. The passing mark is 50. / Kolej memerlukan program untuk menentukan LULUS atau GAGAL berdasarkan markah 0–100.</p>
<table class="ipo"><thead><tr><th>Input</th><th>Process</th><th>Output</th></tr></thead><tbody><tr><td>mark</td><td>Validate 0–100; if mark ≥ 50, PASS; otherwise FAIL</td><td>PASS / FAIL / INVALID</td></tr></tbody></table>
<pre><code>START
INPUT mark
IF mark &lt; 0 OR mark &gt; 100 THEN
    OUTPUT "INVALID"
ELSE IF mark &gt;= 50 THEN
    OUTPUT "PASS"
ELSE
    OUTPUT "FAIL"
END IF
END</code></pre>
<h3>1.1.4 Test cases / Kes ujian</h3><table class="ipo"><thead><tr><th>Input</th><th>Expected output</th><th>Purpose</th></tr></thead><tbody><tr><td>49</td><td>FAIL</td><td>Below boundary</td></tr><tr><td>50</td><td>PASS</td><td>Boundary</td></tr><tr><td>100</td><td>PASS</td><td>Upper valid boundary</td></tr><tr><td>110</td><td>INVALID</td><td>Invalid input</td></tr></tbody></table>
<div class="task"><b>Activity 1 / Aktiviti 1</b><p>For a rectangle-area calculator, identify the PLC deliverables for <i>analysis, design, coding and testing</i>. / Kenal pasti hasil bagi fasa analisis, reka bentuk, pengekodan dan pengujian.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>Analysis: length, width → area = length × width → area. Design: IPO and pseudocode. Coding: C++ source file. Testing: e.g. 4 × 3 = 12; 0 × 5 = 0.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 1.2 · PROBLEM SOLVING CONCEPT</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Students can analyse a problem, construct an IPO chart, decompose a task and verify a proposed solution. / Pelajar boleh menganalisis masalah, membina jadual IPO, memecahkan tugasan dan mengesahkan penyelesaian.</p>
<h3>1.2.1 What is problem solving? / Apakah penyelesaian masalah?</h3><p>Problem solving is the process of understanding a need, planning logical steps and evaluating whether the steps produce the expected result. / Penyelesaian masalah ialah proses memahami keperluan, merancang langkah logik dan menilai hasil.</p>
<h3>1.2.2 Five steps / Lima langkah</h3><ol><li><b>Understand:</b> Identify what is being asked / Fahami kehendak soalan.</li><li><b>Analyse:</b> Identify input, processing, output and constraints / Analisis IPO.</li><li><b>Design:</b> Write a sequence of logical steps / Rancang langkah.</li><li><b>Implement:</b> Convert the design into a program / Laksanakan.</li><li><b>Evaluate:</b> Test normal, boundary and invalid inputs / Nilai dan uji.</li></ol>
<h3>1.2.3 IPO Model / Model Input–Process–Output</h3><table class="ipo"><thead><tr><th>INPUT / Masukan</th><th>PROCESS / Proses</th><th>OUTPUT / Keluaran</th></tr></thead><tbody><tr><td>Information received by program / Data diterima</td><td>Calculations and decisions / Pengiraan dan keputusan</td><td>Results displayed / Hasil dipaparkan</td></tr></tbody></table>
<h3>1.2.4 Worked Example: Average of Three Marks / Purata Tiga Markah</h3><p><b>Problem:</b> Calculate the average of three quiz marks. / Kira purata tiga markah kuiz.</p><table class="ipo"><thead><tr><th>Input</th><th>Process</th><th>Output</th></tr></thead><tbody><tr><td>mark1, mark2, mark3</td><td>total = mark1 + mark2 + mark3; average = total / 3</td><td>average</td></tr></tbody></table>
<p><b>Sample data:</b> 60, 75, 90 → total = 225 → average = <b>75</b>.</p><pre><code>START
INPUT mark1, mark2, mark3
total ← mark1 + mark2 + mark3
average ← total / 3
OUTPUT average
END</code></pre>
<div class="note"><b>Decomposition / Pecahan masalah:</b> Split the task into <i>read marks → validate marks → calculate total → calculate average → display result</i>. This makes a complex task easier to manage.</div>
<h3>1.2.5 Common mistakes / Kesilapan lazim</h3><ul><li>Confusing input with output / Keliru input dan output.</li><li>Using the wrong formula / Formula tidak tepat.</li><li>Ignoring invalid input / Tidak menyemak input tidak sah.</li><li>Failing to test boundary cases / Tidak menguji nilai sempadan.</li></ul>
<div class="task"><b>Activity 2 / Aktiviti 2</b><p>A shop sells notebooks at RM4.50 each. Create an IPO chart and calculate the cost of 6 notebooks. / Bina jadual IPO dan kira kos enam buku nota.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>Input: price = RM4.50, quantity = 6. Process: total = price × quantity. Output: RM27.00.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 1.3 · ALGORITHM, PSEUDOCODE &amp; FLOWCHART</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Students can develop algorithms using sequence, selection and repetition, represent solutions in pseudocode and construct flowcharts with correct symbols. / Pelajar dapat membina algoritma jujukan, pilihan dan ulangan serta mewakilkannya menggunakan pseudokod dan carta alir.</p>
<h3>1.3.1 Algorithm / Algoritma</h3><p>An <b>algorithm</b> is a finite set of clear, ordered steps to solve a problem. A good algorithm has defined inputs/outputs, unambiguous instructions and a stopping point. / Algoritma ialah langkah yang jelas, tersusun dan terhingga untuk menyelesaikan masalah.</p>
<h3>1.3.2 Pseudocode / Pseudokod</h3><p>Pseudocode expresses an algorithm using readable, language-independent statements such as INPUT, OUTPUT, IF, ELSE and WHILE. It is <b>not</b> executable C++ code. / Pseudokod ialah penerangan logik yang mudah dibaca, bukan kod C++ yang boleh terus dijalankan.</p>
<h3>1.3.3 Flowchart symbols / Simbol carta alir</h3><div class="symbols"><div><span class="oval">START / END</span><small>Terminator / Mula &amp; Tamat</small></div><div><span class="parallelogram">INPUT / OUTPUT</span><small>Data / Input &amp; Output</small></div><div><span class="rectangle">PROCESS</span><small>Process / Pengiraan</small></div><div><span class="diamond" data-label="DECISION?"></span><small>Decision / Keputusan</small></div></div><p><b>Flowlines / Garisan aliran</b> (arrows) show the direction of control. / Anak panah menunjukkan arah aliran.</p>
<h3>1.3.4 Three control structures / Tiga struktur kawalan</h3><table class="ipo"><thead><tr><th>Structure</th><th>Purpose / Tujuan</th><th>Typical pseudocode</th></tr></thead><tbody><tr><td>Sequence / Jujukan</td><td>Perform steps in order</td><td>INPUT → CALCULATE → OUTPUT</td></tr><tr><td>Selection / Pilihan</td><td>Choose based on a condition</td><td>IF ... THEN ... ELSE</td></tr><tr><td>Repetition / Ulangan</td><td>Repeat while condition holds</td><td>WHILE ... DO</td></tr></tbody></table>
<h3>Example A: Sequence / Contoh A: Jujukan</h3><pre><code>START
INPUT length, width
area ← length × width
OUTPUT area
END</code></pre>
<h3>Example B: Selection / Contoh B: Pilihan</h3><pre><code>START
INPUT mark
IF mark &gt;= 50 THEN
    OUTPUT "PASS"
ELSE
    OUTPUT "FAIL"
END IF
END</code></pre>
<div class="flow-example"><span class="oval">START</span><b>↓</b><span class="parallelogram">INPUT mark</span><b>↓</b><span class="diamond" data-label="mark ≥ 50?"></span><div class="branches"><span>YES → OUTPUT PASS</span><span>NO → OUTPUT FAIL</span></div><span class="flow-caption">Both branches join before END / Kedua-dua cabang bersambung sebelum tamat</span><b>↓</b><span class="oval">END</span></div>
<h3>Example C: Repetition / Contoh C: Ulangan</h3><p>Display numbers 1 to 3. / Paparkan nombor 1 hingga 3.</p><pre><code>START
counter ← 1
WHILE counter &lt;= 3 DO
    OUTPUT counter
    counter ← counter + 1
END WHILE
END</code></pre><p><b>Trace / Jejak:</b> output = 1, 2, 3. Updating the counter prevents an infinite loop. / Pengemaskinian pembilang mengelakkan gelung tanpa henti.</p>
<h3>1.3.5 Algorithm vs Pseudocode vs Flowchart</h3><table class="ipo"><thead><tr><th>Representation</th><th>Form</th><th>Best for</th></tr></thead><tbody><tr><td>Algorithm</td><td>Ordered steps</td><td>Planning logic</td></tr><tr><td>Pseudocode</td><td>Structured text</td><td>Preparing to code</td></tr><tr><td>Flowchart</td><td>Symbols and arrows</td><td>Visualising decisions and loops</td></tr></tbody></table>
<div class="task"><b>Activity 3 / Aktiviti 3</b><p>Construct an IPO table, pseudocode and flowchart to determine whether an integer is EVEN or ODD. / Bina IPO, pseudokod dan carta alir bagi nombor GENAP atau GANJIL.</p><details><summary>Suggested pseudocode / Cadangan pseudokod</summary><pre><code>START
INPUT number
IF number MOD 2 = 0 THEN
    OUTPUT "EVEN"
ELSE
    OUTPUT "ODD"
END IF
END</code></pre><p>Flowchart: START → INPUT number → decision (number MOD 2 = 0?) → YES: EVEN / NO: ODD → END.</p></details></div>
<div class="task"><b>Mini Project / Projek Mini</b><p>Design a parking-fee calculator: first 2 hours cost RM3, each additional started hour costs RM2. State assumptions, construct an IPO table, pseudocode and a flowchart, then test 1, 2 and 3 hours. / Reka pengiraan bayaran parkir dan uji kes sempadan.</p></div></div>`
];
const questions=[
[{q:'Which PLC phase normally precedes coding?',a:['Maintenance','Program design','Documentation'],correct:1},{q:'Which phase checks whether a program produces expected results?',a:['Testing','Problem definition','Coding'],correct:0},{q:'What does IPO stand for?',a:['Input Process Output','Internal Program Operation','Input Print Object'],correct:0},{q:'Which is an input for calculating rectangle area?',a:['Calculated area','Length and width','Area formula'],correct:1},{q:'Which is the correct area formula?',a:['length + width','2 × (length + width)','length × width'],correct:2},{q:'Which property describes a valid algorithm?',a:['Finite and unambiguous steps','No stopping condition','Only written in C++'],correct:0},{q:'Which flowchart symbol represents a decision?',a:['Rectangle','Diamond','Oval'],correct:1},{q:'Which flowchart symbol represents input/output?',a:['Parallelogram','Diamond','Rectangle'],correct:0},{q:'Which pseudocode structure chooses between PASS and FAIL?',a:['WHILE','IF ... ELSE','OUTPUT only'],correct:1},{q:'For marks 60, 75, 90, what is the average?',a:['70','75','80'],correct:1}],
[{q:'What is the entry point of a typical C++ program?',a:['start()','main()','begin()'],correct:1},{q:'Which data type stores a whole number?',a:['int','char','bool'],correct:0},{q:'A missing semicolon is usually a...',a:['Logic error','Syntax error','Hardware error'],correct:1}],
[{q:'Which is a valid C++ identifier?',a:['2score','total_score','total score'],correct:1},{q:'Which operator checks equality?',a:['=','==','!='],correct:1},{q:'Which statement reads input?',a:['cin >> age;','cout << age;','return age;'],correct:0}],
[{q:'Which statement handles two alternative branches?',a:['if-else','include','return'],correct:0},{q:'Which loop is commonly used for a known number of repetitions?',a:['for','switch','if'],correct:0},{q:'Which is a selection structure?',a:['while','switch','for'],correct:1}],
[{q:'What is the first index of a C++ array?',a:['1','0','-1'],correct:1},{q:'How many values can int a[5] store?',a:['4','5','6'],correct:1},{q:'Which accesses the third array element?',a:['a[3]','a[2]','a(3)'],correct:1}],
[{q:'Which keyword declares a function with no return value?',a:['void','int','break'],correct:0},{q:'What does a function prototype provide?',a:['Declaration','Loop execution','Array index'],correct:0},{q:'Which syntax denotes a reference parameter?',a:['int x','int &x','int * x = 0'],correct:1}]
];
let selected=0;const $=id=>document.getElementById(id);const key=i=>'pf-progress-'+i;function completed(i){return localStorage.getItem(key(i))==='1'}
function nav(){ $('nav').innerHTML=modules.map((m,i)=>`<button class="navitem ${i===selected?'active':''}" data-module="${i}"><span>${String(i+1).padStart(2,'0')} · ${m.title}</span><span>${completed(i)?'✓':''}</span></button>`).join('');document.querySelectorAll('[data-module]').forEach(b=>b.onclick=()=>show(+b.dataset.module));}
function home(){selected=-1;nav();$('content').innerHTML=`<div class="hero"><div class="eyebrow">E-LEARNING TVET · C++</div><h1>Programming Fundamentals</h1><p>Belajar asas pengaturcaraan secara berperingkat: penyelesaian masalah, struktur C++, elemen program, kawalan, array dan function.</p><button class="primary" id="start">Mula Belajar →</button></div><h2>Modul Pembelajaran</h2><div class="cards">${modules.map((m,i)=>`<button class="course" data-go="${i}"><span class="eyebrow">MODUL ${i+1} ${completed(i)?' · ✓ Selesai':''}</span><strong>${m.title}</strong><small>${m.topics.length} subtopik · Nota & kuiz</small><span class="arrow">Buka modul →</span></button>`).join('')}</div>`;$('start').onclick=()=>show(0);document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(+b.dataset.go));}
const practicalModule1=`<section class="practicals"><h2>Practical Exercises / Latihan Praktikal</h2><p>Complete these activities <b>after the quiz</b>. Prepare an IPO table, pseudocode and flowchart for each task. / Siapkan jadual IPO, pseudokod dan carta alir selepas kuiz.</p>
<article class="task"><h3>Practical 1 · Rectangle Area / Luas Segi Empat Tepat</h3><p><b>Task:</b> Read length and width, then calculate and display area. Test with length 8 and width 5.</p><p><b>Deliverables:</b> IPO table, pseudocode, flowchart and expected output.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><p>IPO: Input = length, width; Process = length × width; Output = area (40).</p><pre>START
INPUT length, width
area ← length × width
OUTPUT area
END</pre><p>Flowchart: START → INPUT length, width → PROCESS area ← length × width → OUTPUT area → END.</p></details></article>
<article class="task"><h3>Practical 2 · Pass or Fail / Lulus atau Gagal</h3><p><b>Task:</b> Read mark (0–100). Display INVALID outside the range, PASS for 50–100, and FAIL for 0–49. Use a diamond decision and label Yes/No branches.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre>START
INPUT mark
IF mark &lt; 0 OR mark &gt; 100 THEN
  OUTPUT "INVALID"
ELSE IF mark &gt;= 50 THEN
  OUTPUT "PASS"
ELSE
  OUTPUT "FAIL"
END IF
END</pre><p>Test: −1 → INVALID; 49 → FAIL; 50 → PASS; 101 → INVALID. Draw diamond nodes for both conditions.</p></details></article>
<article class="task"><h3>Practical 3 · Parking Fee / Bayaran Parkir</h3><p><b>Task:</b> First two hours (or part thereof) cost RM3 in total. Every additional started hour costs RM2. Assume duration &gt; 0, measured in hours. Draw the flowchart with a decision diamond.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><p>IPO: Input = duration; Process = fee; Output = total fee.</p><pre>START
INPUT duration
IF duration &lt;= 2 THEN
  fee ← 3
ELSE
  extra ← CEILING(duration - 2)
  fee ← 3 + extra × 2
END IF
OUTPUT fee
END</pre><p>Test: 1 hour → RM3; 2 hours → RM3; 2.5 hours → RM5; 3 hours → RM5.</p></details></article></section>`;
function show(i){selected=i;nav();let m=modules[i];$('content').innerHTML=`<div class="eyebrow">MODUL ${i+1} / ${modules.length}</div><h1>${m.title}</h1><p class="intro">Baca nota setiap subtopik, cuba contoh yang diberikan dan jawab kuiz untuk menguji pemahaman.</p><div class="topics">${m.topics.map((t,j)=>`<article class="topic"><h2>${t[0]} ${t[1]}</h2><p>${t[2]}</p><pre><code>${escapeHtml(t[3])}</code></pre>${i===0?richModule1[j]:''}</article>`).join('')}</div><section class="quiz"><h2>Kuiz Modul ${i+1}</h2><p>Jawab ${questions[i].length} soalan. Markah disimpan pada browser ini sahaja.</p><div id="quizbody"></div></section>${i===0?practicalModule1:''}<div class="next"><button class="secondary" id="back">← Dashboard</button>${i<5?'<button class="primary" id="next">Modul seterusnya →</button>':''}</div>`;$('back').onclick=home;if(i<5)$('next').onclick=()=>show(i+1);renderQuiz(i);window.scrollTo(0,0);}
function escapeHtml(s){return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}
function renderQuiz(i){$('quizbody').innerHTML=`<form id="quizform">${questions[i].map((q,j)=>`<fieldset><legend>${j+1}. ${q.q}</legend>${q.a.map((a,k)=>`<label class="answer"><input required type="radio" name="q${j}" value="${k}"> ${escapeHtml(a)}</label>`).join('')}</fieldset>`).join('')}<button class="primary" type="submit">Semak Markah</button></form><div id="result" role="status"></div>`;$('quizform').onsubmit=e=>{e.preventDefault();let data=new FormData(e.target),score=questions[i].reduce((n,q,j)=>n+(Number(data.get('q'+j))===q.correct?1:0),0);localStorage.setItem('pf-score-'+i,String(score));localStorage.setItem(key(i),'1');$('result').textContent=`Markah: ${score}/${questions[i].length} (${Math.round(score/questions[i].length*100)}%). ${score===questions[i].length?'Syabas! Semua jawapan betul.':'Semak semula nota dan cuba lagi.'}`;nav();};}
$('home').onclick=home;home();
