const modules=[
{title:'Problem Solving',topics:[['1.1','Demonstrate Programming Life Cycle (PLC)','The Programming Life Cycle includes problem definition, analysis, design, coding, testing, documentation and maintenance.','Example: For a grade calculator, identify inputs (marks), processing (calculate grade), and output (grade).'],['1.2','Construct problem solving concept','Break a problem into input, process and output (IPO). Use decomposition to solve smaller tasks.','IPO example: Input = two numbers; Process = addition; Output = sum.'],['1.3','Construct the different types of algorithms, pseudocode and flowcharts in solve problem','An algorithm is a finite series of instructions. Pseudocode uses structured plain language; flowcharts use standard symbols such as oval (start/end), parallelogram (input/output), rectangle (process), and diamond (decision).','START\nINPUT a, b\nsum ← a + b\nOUTPUT sum\nEND']]},
{title:'Introduction to Fundamentals of Programming',topics:[['2.1','Construct the C++ program basic structure','A basic C++ program uses #include, main(), statements and return 0. / Program C++ asas menggunakan #include, main(), arahan dan return 0.',' #include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello World";\n  return 0;\n}'],['2.2','Construct identifier and data types','Identifiers name variables and functions. Common C++ data types include int, double, char, bool and string. / Pengecam menamakan pemboleh ubah dan fungsi. Jenis data C++ termasuk int, double, char, bool dan string.','int age = 18;\ndouble price = 12.50;\nchar grade = \'A\';\nbool passed = true;'],['2.3','Follow the basic step of computer program','Plan the solution, write source code, compile, run and test with different inputs. / Rancang penyelesaian, tulis kod sumber, kompil, jalankan dan uji dengan pelbagai input.','Source code (Kod sumber) → Compiler (Pengkompil) → Executable (Fail boleh laksana) → Run (Jalankan) → Test (Uji)'],['2.4','Follow instruction process of compiling and debugging process and errors in programming','Syntax errors violate language rules; runtime errors happen during execution; logic errors produce wrong results. Debugging identifies and corrects them. / Ralat sintaks melanggar peraturan bahasa; ralat masa larian berlaku semasa program berjalan; ralat logik menghasilkan keputusan salah. Penyahpepijatan mengenal pasti dan membetulkan ralat.','Example syntax error / Contoh ralat sintaks: cout << "Hi"  // missing semicolon / tiada titik koma']]},
{title:'Program Elements',topics:[['3.1','Construct Identifiers','Use meaningful variable names. C++ identifiers cannot begin with a digit, contain spaces or use reserved keywords. / Gunakan nama pemboleh ubah yang bermakna. Pengecam C++ tidak boleh bermula dengan digit, mengandungi ruang atau menggunakan kata kunci terpelihara.','int totalMarks = 90;\n// 2marks and total marks are invalid identifiers'],['3.2','Construct operators and expressions','Arithmetic (+, -, *, /, %), relational (==, !=, >, <, >=, <=), and logical (&&, ||, !) operators form expressions. / Operator aritmetik, hubungan dan logik digunakan untuk membina ungkapan.','int total = 10 + 5;\nbool eligible = (total >= 10) && (total < 20);'],['3.3','Construct input output statements','Use cin to read keyboard input and cout to display output. / Gunakan cin untuk membaca input papan kekunci dan cout untuk memaparkan output.','int age;\ncout << "Enter age: ";\ncin >> age;\ncout << "Age: " << age;']]},
{title:'Program Control Structure',topics:[['4.1','Construct program control structure','Control structures determine execution order: sequence, selection and repetition.','Sequence: input → calculate → display'],['4.2','Construct selection control structures in problem solving','Use if, if-else or switch to choose actions based on conditions.','if (mark >= 50) {\n  cout << "Pass";\n} else {\n  cout << "Fail";\n}'],['4.3','Construct loops control structure in problem solving','Use for, while or do-while to repeat instructions. Ensure loop conditions eventually terminate.','for (int i = 1; i <= 5; i++) {\n  cout << i << endl;\n}']]},
{title:'Array',topics:[['5.1','Construct array in programming — Fundamentals / Asas','Learn to declare, initialise and access array elements. / Belajar mengisytiharkan, mengisi dan mengakses elemen.','int marks[3] = {70, 80, 90};\ncout << marks[0]; // 70'],['5.1','Processing arrays with loops / Memproses array dengan gelung','Use loops for input, output, total and average. / Gunakan gelung untuk input, output, jumlah dan purata.','for (int i = 0; i < 3; i++) {\n  cout << marks[i] << endl;\n}'],['5.1','Array analysis and safety / Analisis dan keselamatan array','Find maximum, minimum and target values safely. / Cari nilai maksimum, minimum dan sasaran dengan selamat.','int highest = marks[0];\nfor (int i = 1; i < 3; i++) {\n  if (marks[i] > highest) highest = marks[i];\n}']]},
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
// Modul 2: nota dwibahasa, contoh kod, aktiviti dan pengukuhan.
const richModule2 = [
`<div class="learning"><div class="lesson-tag">TOPIC 2.1 · C++ PROGRAM BASIC STRUCTURE</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Identify and construct the essential parts of a simple C++ program. / Mengenal pasti dan membina bahagian utama program C++.</p>
<h3>2.1.1 What is C++? / Apakah C++?</h3><p>C++ is a compiled programming language used to create applications. A compiler translates source code into a program the computer can execute. / C++ ialah bahasa pengaturcaraan yang menggunakan proses kompilasi untuk membina aplikasi. Pengkompil menterjemahkan kod sumber menjadi program yang boleh dilaksanakan oleh komputer.</p>
<h3>2.1.2 Anatomy of a program / Struktur program</h3><pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, TVET!" &lt;&lt; endl;
    return 0;
}</code></pre>
<table class="ipo"><thead><tr><th>Element / Elemen</th><th>Function / Fungsi</th></tr></thead><tbody><tr><td><code>#include &lt;iostream&gt;</code></td><td>Provides standard input/output facilities / Menyediakan kemudahan input/output</td></tr><tr><td><code>using namespace std;</code></td><td>Allows writing <code>cout</code> instead of <code>std::cout</code> / Memudahkan penggunaan nama</td></tr><tr><td><code>int main()</code></td><td>Entry point of the program / Fungsi utama program</td></tr><tr><td><code>{ }</code></td><td>Encloses a block of statements / Mengapit blok arahan</td></tr><tr><td><code>cout &lt;&lt;</code></td><td>Displays output / Memaparkan output</td></tr><tr><td><code>return 0;</code></td><td>Indicates successful completion of <code>main</code> / Menandakan tamat dengan jayanya</td></tr></tbody></table>
<h3>2.1.3 Output and comments / Output dan komen</h3><p>Comments explain code to readers and are ignored by the compiler. / Komen menerangkan kod kepada pembaca dan diabaikan oleh pengkompil.</p><pre><code>// This is a single-line comment
cout &lt;&lt; "Welcome" &lt;&lt; endl;
/* This is a
   multi-line comment */</code></pre><div class="note"><b>Remember / Ingat:</b> Most C++ statements end with a semicolon (<code>;</code>). C++ is case-sensitive: <code>cout</code> and <code>Cout</code> are different. / Kebanyakan arahan C++ berakhir dengan titik koma (<code>;</code>). C++ membezakan huruf besar dan kecil; <code>cout</code> tidak sama dengan <code>Cout</code>.</div>
<div class="task"><b>Activity 2.1 / Aktiviti 2.1</b><p>Change the greeting to your name and predict the output. / Tukar ucapan kepada nama sendiri dan ramalkan output.</p><details><summary>Suggested answer / Cadangan jawapan</summary><pre><code>cout &lt;&lt; "Hello, Aina!" &lt;&lt; endl;</code></pre><p>Output / Paparan output: Hello, Aina!</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 2.2 · IDENTIFIERS AND DATA TYPES</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Declare meaningful variables, select suitable data types and assign values. / Mengisytiharkan pemboleh ubah, memilih jenis data dan menetapkan nilai.</p>
<h3>2.2.1 Identifier / Pengecam</h3><p>An identifier is a name given to a variable or function. / Identifier ialah nama bagi pemboleh ubah atau fungsi.</p><ul><li>May contain letters, digits and underscore (<code>_</code>), but cannot begin with a digit / Boleh mengandungi huruf, nombor dan garis bawah tetapi tidak boleh bermula dengan nombor.</li><li>Cannot contain spaces or be a reserved keyword such as <code>int</code> / Tidak boleh mempunyai ruang atau menggunakan kata kunci.</li><li>Names are case-sensitive / Huruf besar dan kecil dibezakan.</li></ul>
<table class="ipo"><thead><tr><th>Valid / Sah</th><th>Invalid / Tidak sah</th><th>Reason / Sebab</th></tr></thead><tbody><tr><td><code>studentAge</code></td><td><code>2age</code></td><td>Starts with digit / Bermula nombor</td></tr><tr><td><code>total_marks</code></td><td><code>total marks</code></td><td>Contains space / Ada ruang</td></tr><tr><td><code>price2</code></td><td><code>int</code></td><td>Reserved keyword / Kata kunci</td></tr></tbody></table>
<h3>2.2.2 Data types / Jenis data</h3><p>Choose a data type according to the value that needs to be stored. / Pilih jenis data berdasarkan nilai yang hendak disimpan.</p><table class="ipo"><thead><tr><th>Type / Jenis</th><th>Purpose / Kegunaan</th><th>Example / Contoh</th></tr></thead><tbody><tr><td><code>int</code></td><td>Whole number / Nombor bulat</td><td><code>int age = 19;</code></td></tr><tr><td><code>double</code></td><td>Decimal number / Nombor perpuluhan</td><td><code>double price = 12.50;</code></td></tr><tr><td><code>char</code></td><td>Single character / Satu aksara</td><td><code>char grade = 'A';</code></td></tr><tr><td><code>bool</code></td><td>True or false / Benar atau palsu</td><td><code>bool passed = true;</code></td></tr><tr><td><code>string</code></td><td>Text / Teks</td><td><code>string name = "Aina";</code></td></tr></tbody></table>
<h3>2.2.3 Complete example / Contoh lengkap</h3><pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    string name = "Aina";
    int age = 19;
    double cgpa = 3.50;
    cout &lt;&lt; name &lt;&lt; " is " &lt;&lt; age &lt;&lt; " years old." &lt;&lt; endl;
    cout &lt;&lt; "CGPA: " &lt;&lt; cgpa &lt;&lt; endl;
    return 0;
}</code></pre>
<div class="note"><b>Note / Nota:</b> Text in a <code>string</code> uses double quotes; a <code>char</code> uses single quotes. / Teks string menggunakan petikan berganda, char menggunakan petikan tunggal.</div>
<div class="task"><b>Activity 2.2 / Aktiviti 2.2</b><p>Declare variables for a student's name, age, final mark and pass status. / Isytiharkan pemboleh ubah bagi nama, umur, markah akhir dan status lulus.</p><details><summary>Suggested answer / Cadangan jawapan</summary><pre><code>string name = "Aina";
int age = 19;
double finalMark = 82.5;
bool passed = true;</code></pre></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 2.3 · BASIC STEPS OF A COMPUTER PROGRAM</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Describe and carry out the steps to create, compile, run and test a C++ program. / Menerangkan dan melaksanakan langkah membina, mengkompil, menjalankan dan menguji program C++.</p>
<h3>2.3.1 Development workflow / Aliran pembangunan</h3><div class="process-flow"><span>Plan / Rancang</span><b>→</b><span>Write / Tulis</span><b>→</b><span>Save / Simpan</span><b>→</b><span>Compile / Kompil</span><b>→</b><span>Run / Jalan</span><b>→</b><span>Test / Uji</span></div>
<ol><li><b>Plan:</b> Define input, processing and output / Tentukan IPO.</li><li><b>Write:</b> Type C++ source code in an editor / Tulis kod sumber.</li><li><b>Save:</b> Use a filename ending in <code>.cpp</code>, such as <code>hello.cpp</code> / Simpan fail .cpp.</li><li><b>Compile:</b> Translate source code and identify compile-time errors / Kompil kod dan semak ralat.</li><li><b>Run:</b> Execute the program / Jalankan program.</li><li><b>Test:</b> Compare actual output with expected output / Banding hasil sebenar dengan hasil dijangka.</li></ol>
<h3>2.3.2 Worked example / Contoh berpandu</h3><p>Task: Calculate the sum of two numbers. / Tugasan: Kira hasil tambah dua nombor.</p><table class="ipo"><thead><tr><th>Input / Masukan</th><th>Process / Proses</th><th>Output / Keluaran</th></tr></thead><tbody><tr><td><code>a</code>, <code>b</code></td><td><code>sum = a + b</code></td><td><code>sum</code></td></tr></tbody></table>
<pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int a, b;
    cout &lt;&lt; "Enter two numbers: ";
    cin &gt;&gt; a &gt;&gt; b;
    int sum = a + b;
    cout &lt;&lt; "Sum = " &lt;&lt; sum &lt;&lt; endl;
    return 0;
}</code></pre>
<h3>2.3.3 Sample tests / Contoh pengujian</h3><p>Compare each expected result with the actual program output. / Bandingkan setiap hasil yang dijangka dengan output sebenar program.</p><table class="ipo"><thead><tr><th>Input</th><th>Expected output / Output dijangka</th></tr></thead><tbody><tr><td>4 6</td><td>Sum = 10</td></tr><tr><td>0 5</td><td>Sum = 5</td></tr><tr><td>-3 2</td><td>Sum = -1</td></tr></tbody></table>
<div class="note"><b>Tip / Petua:</b> If a compiler such as g++ is installed, <code>g++ hello.cpp -o hello</code> compiles the program. Run the resulting executable according to your operating system. / Jika pengkompil seperti g++ telah dipasang, arahan <code>g++ hello.cpp -o hello</code> akan mengkompil program. Jalankan fail yang terhasil mengikut sistem pengoperasian komputer.</div>
<div class="task"><b>Activity 2.3 / Aktiviti 2.3</b><p>Modify the program to multiply two integers instead of adding them. Test with 4 and 6. / Ubah program untuk mendarab dua nombor.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>Use <code>int product = a * b;</code> and display <code>product</code>. Expected output: 24. / Gunakan <code>int product = a * b;</code> dan paparkan nilai <code>product</code>. Output dijangka: 24.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 2.4 · COMPILING, DEBUGGING AND ERRORS</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Distinguish syntax, runtime and logic errors and apply simple debugging methods. / Membezakan ralat sintaks, masa larian dan logik serta menggunakan kaedah debugging.</p>
<h3>2.4.1 Types of errors / Jenis ralat</h3><table class="ipo"><thead><tr><th>Error / Ralat</th><th>Description / Penerangan</th><th>Example / Contoh</th></tr></thead><tbody><tr><td>Syntax / Sintaks</td><td>Violates C++ grammar; typically detected at compile time / Melanggar peraturan bahasa</td><td>Missing <code>;</code> / Tertinggal titik koma</td></tr><tr><td>Runtime / Masa larian</td><td>Occurs while executing / Berlaku ketika program berjalan</td><td>Accessing invalid memory / Mengakses memori tidak sah</td></tr><tr><td>Logic / Logik</td><td>Program runs but produces incorrect results / Program berjalan tetapi hasil salah</td><td>Using <code>+</code> instead of <code>*</code> in area calculation / Menggunakan tambah dan bukannya darab untuk mengira luas</td></tr></tbody></table>
<h3>2.4.2 Debugging syntax errors / Membetulkan ralat sintaks</h3><p><b>Incorrect / Salah:</b></p><pre><code>cout &lt;&lt; "Hello"</code></pre><p><b>Correct / Betul:</b></p><pre><code>cout &lt;&lt; "Hello";</code></pre>
<h3>2.4.3 Debugging logic errors / Membetulkan ralat logik</h3><p><b>Incorrect / Salah:</b> Rectangle area calculated as <code>length + width</code>. / Luas segi empat tepat dikira menggunakan tambah dan bukannya darab.</p><p><b>Correct / Betul:</b> Use <code>length * width</code>. For length 8 and width 5, the correct area is 40, not 13. / Gunakan <code>length * width</code>. Jika panjang ialah 8 dan lebar ialah 5, luas yang betul ialah 40, bukannya 13.</p>
<h3>2.4.4 Debugging checklist / Senarai semak</h3><ol><li>Read the error message and line number / Baca mesej dan nombor baris.</li><li>Check spelling, brackets, quotation marks and semicolons / Semak ejaan, kurungan dan titik koma.</li><li>Test with known input and expected output / Uji input dan output dijangka.</li><li>Print intermediate values when needed / Paparkan nilai sementara jika perlu.</li><li>Fix one issue and test again / Baiki satu isu dan uji semula.</li></ol>
<div class="task"><b>Activity 2.4 / Aktiviti 2.4</b><p>Identify the error and suggest a correction. / Kenal pasti ralat dan cadangkan pembetulan.</p><pre><code>int total = 5 + 3;
cout &lt;&lt; "Total = " &lt;&lt; total</code></pre><details><summary>Suggested answer / Cadangan jawapan</summary><p>Syntax error: missing semicolon at the end of the <code>cout</code> statement. / Ralat sintaks: tiada titik koma selepas cout.</p><pre><code>cout &lt;&lt; "Total = " &lt;&lt; total;</code></pre></details></div></div>`
];

const practicalModule2=`<section class="practicals"><h2>Practical Exercises / Latihan Praktikal — Modul 2</h2><p>Complete these three exercises after the quiz. / Selesaikan tiga latihan ini selepas kuiz. Use a C++ compiler to run and test your code where available. / Gunakan pengkompil C++ untuk menjalankan dan menguji kod jika tersedia.</p>
<article class="task"><h3>Practical 1 · Personal Introduction / Pengenalan Diri</h3><p>Write a complete C++ program displaying your name, course and college on separate lines. / Tulis program C++ lengkap yang memaparkan nama, kursus dan kolej pada baris berasingan.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    cout &lt;&lt; "Name: Aina" &lt;&lt; endl;
    cout &lt;&lt; "Course: Programming Fundamentals" &lt;&lt; endl;
    cout &lt;&lt; "College: Community College" &lt;&lt; endl;
    return 0;
}</code></pre></details></article>
<article class="task"><h3>Practical 2 · Student Profile / Profil Pelajar</h3><p>Declare <code>string</code>, <code>int</code>, <code>double</code> and <code>bool</code> variables for a student's name, age, mark and pass status. Display the details. / Isytiharkan pemboleh ubah jenis <code>string</code>, <code>int</code>, <code>double</code> dan <code>bool</code> bagi nama, umur, markah dan status lulus pelajar. Paparkan semua maklumat.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;
int main() {
    string name = "Aina";
    int age = 19;
    double mark = 78.5;
    bool passed = true;
    cout &lt;&lt; name &lt;&lt; " | " &lt;&lt; age &lt;&lt; " | " &lt;&lt; mark &lt;&lt; " | " &lt;&lt; boolalpha &lt;&lt; passed;
    return 0;
}</code></pre></details></article>
<article class="task"><h3>Practical 3 · Find and Fix Errors / Cari dan Baiki Ralat</h3><p>Fix the syntax errors below, then change the incorrect area formula. Test with length = 8 and width = 5. / Betulkan ralat sintaks di bawah, kemudian baiki formula luas yang salah. Uji program menggunakan panjang = 8 dan lebar = 5.</p><pre><code>int main() {
    int length = 8, width = 5;
    int area = length + width;
    cout &lt;&lt; "Area: " &lt;&lt; area
    return 0;
}</code></pre><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int length = 8, width = 5;
    int area = length * width;
    cout &lt;&lt; "Area: " &lt;&lt; area;
    return 0;
}</code></pre><p>Expected output / Output dijangka: Area: 40.</p></details></article></section>`;

// Modul 3: nota lengkap dwibahasa, contoh dan aktiviti.
const richModule3 = [
`<div class="learning"><div class="lesson-tag">TOPIC 3.1 · IDENTIFIERS / PENGECAM</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Identify valid C++ identifiers, declare variables and constants, and apply meaningful naming conventions. / Mengenal pasti pengecam C++ yang sah, mengisytiharkan pemboleh ubah dan pemalar serta menggunakan nama yang bermakna.</p>
<h3>3.1.1 Definition / Definisi</h3><p>An <b>identifier</b> is a programmer-defined name for a variable, function or other program element. / <b>Pengecam</b> ialah nama yang diberikan oleh pengatur cara kepada pemboleh ubah, fungsi atau elemen program lain.</p>
<h3>3.1.2 Naming rules / Peraturan penamaan</h3><ul><li>Use letters, digits or underscore; do not begin with a digit. / Gunakan huruf, digit atau garis bawah; jangan mulakan dengan digit.</li><li>Do not use spaces or reserved words such as <code>int</code> and <code>return</code>. / Jangan gunakan ruang atau kata kunci terpelihara.</li><li>C++ is case-sensitive: <code>mark</code> and <code>Mark</code> are different. / Huruf besar dan kecil dibezakan.</li><li>Choose descriptive names such as <code>totalMarks</code>. / Pilih nama yang jelas dan bermakna.</li></ul>
<table class="ipo"><thead><tr><th>Valid / Sah</th><th>Invalid / Tidak sah</th><th>Reason / Sebab</th></tr></thead><tbody><tr><td><code>studentName</code></td><td><code>student name</code></td><td>Spaces are not allowed / Ruang tidak dibenarkan</td></tr><tr><td><code>mark2</code></td><td><code>2mark</code></td><td>Cannot start with a digit / Tidak boleh bermula dengan digit</td></tr><tr><td><code>total_marks</code></td><td><code>return</code></td><td>Reserved keyword / Kata kunci terpelihara</td></tr></tbody></table>
<h3>3.1.3 Variables and constants / Pemboleh ubah dan pemalar</h3><p>A <b>variable</b> stores a value that can change; a <b>constant</b> declared with <code>const</code> cannot be reassigned. / <b>Pemboleh ubah</b> menyimpan nilai yang boleh berubah; <b>pemalar</b> dengan <code>const</code> tidak boleh diberi nilai baharu.</p>
<pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int studentAge = 18;
    const double PI = 3.14159;
    studentAge = 19;
    cout &lt;&lt; studentAge &lt;&lt; endl;
    cout &lt;&lt; PI &lt;&lt; endl;
    return 0;
}</code></pre><p><b>Output / Output:</b> 19, followed by 3.14159 on the next line. / 19, diikuti 3.14159 pada baris seterusnya.</p>
<div class="note"><b>Remember / Ingat:</b> Declaration specifies the type and name, while initialization provides an initial value. / Pengisytiharan menetapkan jenis dan nama, manakala pengawalan nilai memberikan nilai awal.</div>
<div class="task"><b>Activity 3.1 / Aktiviti 3.1</b><p>Correct these invalid identifiers: <code>3total</code>, <code>student age</code> and <code>float</code>. / Betulkan pengecam tidak sah tersebut.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p><code>total3</code>, <code>studentAge</code>, <code>floatValue</code>. Other valid descriptive names are acceptable. / Nama lain yang sah dan bermakna juga diterima.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 3.2 · OPERATORS AND EXPRESSIONS / OPERATOR DAN UNGKAPAN</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Use arithmetic, assignment, relational and logical operators and evaluate expressions correctly. / Menggunakan operator aritmetik, umpukan, hubungan dan logik serta menilai ungkapan dengan betul.</p>
<h3>3.2.1 Arithmetic operators / Operator aritmetik</h3><table class="ipo"><thead><tr><th>Operator</th><th>Meaning / Maksud</th><th>Example / Contoh</th></tr></thead><tbody><tr><td><code>+</code></td><td>Add / Tambah</td><td><code>7 + 3</code> = 10</td></tr><tr><td><code>-</code></td><td>Subtract / Tolak</td><td><code>7 - 3</code> = 4</td></tr><tr><td><code>*</code></td><td>Multiply / Darab</td><td><code>7 * 3</code> = 21</td></tr><tr><td><code>/</code></td><td>Divide / Bahagi</td><td><code>7 / 3</code> = 2 for integers / 2 bagi integer</td></tr><tr><td><code>%</code></td><td>Remainder / Baki bahagi</td><td><code>7 % 3</code> = 1</td></tr></tbody></table>
<h3>3.2.2 Assignment and relational operators / Operator umpukan dan hubungan</h3><p><code>=</code> assigns a value; <code>==</code> compares equality. / <code>=</code> menetapkan nilai; <code>==</code> membandingkan kesamaan.</p><table class="ipo"><thead><tr><th>Operator</th><th>Meaning / Maksud</th></tr></thead><tbody><tr><td><code>==</code>, <code>!=</code></td><td>Equal, not equal / Sama, tidak sama</td></tr><tr><td><code>&gt;</code>, <code>&lt;</code></td><td>Greater, less / Lebih besar, lebih kecil</td></tr><tr><td><code>&gt;=</code>, <code>&lt;=</code></td><td>Greater/equal, less/equal / Lebih besar/sama, lebih kecil/sama</td></tr></tbody></table>
<h3>3.2.3 Logical operators / Operator logik</h3><p><code>&amp;&amp;</code> (AND / DAN) requires both conditions to be true; <code>||</code> (OR / ATAU) requires at least one; <code>!</code> (NOT / BUKAN) reverses a Boolean value. / DAN memerlukan kedua-dua syarat benar, ATAU memerlukan sekurang-kurangnya satu, dan BUKAN menyongsangkan nilai Boolean.</p>
<h3>3.2.4 Worked example / Contoh berpandu</h3><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int a = 7, b = 3;
    cout &lt;&lt; a + b &lt;&lt; endl;
    cout &lt;&lt; a / b &lt;&lt; endl;
    cout &lt;&lt; a % b &lt;&lt; endl;
    cout &lt;&lt; boolalpha &lt;&lt; (a &gt; b &amp;&amp; b &gt; 0) &lt;&lt; endl;
    return 0;
}</code></pre><p><b>Expected output / Output dijangka:</b> 10, 2, 1, true (on separate lines / pada baris berasingan).</p>
<div class="note"><b>Operator precedence / Keutamaan operator:</b> Multiplication and division are evaluated before addition and subtraction; parentheses can change the order. / Darab dan bahagi dikira sebelum tambah dan tolak; kurungan boleh mengubah turutan.</div>
<div class="task"><b>Activity 3.2 / Aktiviti 3.2</b><p>Predict <code>5 + 2 * 3</code> and <code>(5 + 2) * 3</code>. Explain the difference. / Ramalkan kedua-dua hasil dan terangkan perbezaannya.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>11 and 21. Multiplication happens first unless parentheses change the order. / Jawapan 11 dan 21; kurungan mengubah turutan operasi.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 3.3 · INPUT AND OUTPUT STATEMENTS / PERNYATAAN INPUT DAN OUTPUT</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Construct C++ programs that accept keyboard input, process values and display formatted output. / Membina program C++ yang menerima input papan kekunci, memproses nilai dan memaparkan output.</p>
<h3>3.3.1 Standard input and output / Input dan output piawai</h3><p><code>cout</code> displays information with the insertion operator <code>&lt;&lt;</code>; <code>cin</code> reads input with the extraction operator <code>&gt;&gt;</code>. / <code>cout</code> memaparkan maklumat dengan <code>&lt;&lt;</code>; <code>cin</code> membaca input dengan <code>&gt;&gt;</code>.</p>
<table class="ipo"><thead><tr><th>Statement / Pernyataan</th><th>Purpose / Tujuan</th></tr></thead><tbody><tr><td><code>cout &lt;&lt; "Hello";</code></td><td>Display text / Papar teks</td></tr><tr><td><code>cin &gt;&gt; age;</code></td><td>Read an integer / Baca integer</td></tr><tr><td><code>cout &lt;&lt; endl;</code></td><td>Move to a new line / Pindah baris</td></tr><tr><td><code>cin &gt;&gt; a &gt;&gt; b;</code></td><td>Read two values / Baca dua nilai</td></tr></tbody></table>
<h3>3.3.2 Worked example: Rectangle area / Contoh berpandu: Luas segi empat</h3><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    double length, width;
    cout &lt;&lt; "Enter length and width: ";
    cin &gt;&gt; length &gt;&gt; width;
    double area = length * width;
    cout &lt;&lt; "Area = " &lt;&lt; area &lt;&lt; endl;
    return 0;
}</code></pre>
<table class="ipo"><thead><tr><th>Input / Input</th><th>Process / Proses</th><th>Output / Output</th></tr></thead><tbody><tr><td>8, 5</td><td>8 × 5</td><td>Area = 40 / Luas = 40</td></tr><tr><td>2.5, 4</td><td>2.5 × 4</td><td>Area = 10 / Luas = 10</td></tr></tbody></table>
<h3>3.3.3 Text input and formatting / Input teks dan pemformatan</h3><p><code>cin &gt;&gt; name</code> reads one word; <code>getline(cin, name)</code> reads a full line, including spaces. / <code>cin &gt;&gt; name</code> membaca satu perkataan; <code>getline(cin, name)</code> membaca satu baris termasuk ruang.</p><pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;
int main() {
    string fullName;
    cout &lt;&lt; "Enter full name: ";
    getline(cin, fullName);
    cout &lt;&lt; "Welcome, " &lt;&lt; fullName &lt;&lt; endl;
    return 0;
}</code></pre>
<div class="note"><b>Important / Penting:</b> If <code>getline</code> follows <code>cin &gt;&gt;</code>, clear the leftover newline first (for example using <code>cin.ignore()</code> appropriately). / Jika <code>getline</code> digunakan selepas <code>cin &gt;&gt;</code>, buang aksara baris baharu yang tertinggal terlebih dahulu.</div>
<div class="task"><b>Activity 3.3 / Aktiviti 3.3</b><p>Modify the rectangle program to calculate a triangle area using <code>0.5 * base * height</code>. / Ubah program untuk mengira luas segi tiga menggunakan formula tersebut.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>Declare <code>double base, height;</code>, read both values and calculate <code>double area = 0.5 * base * height;</code>. For base 8 and height 5, output is 20. / Bagi tapak 8 dan tinggi 5, output ialah 20.</p></details></div></div>`
];

const practicalModule3=`<section class="practicals"><h2>Practical Exercises / Latihan Praktikal — Modul 3</h2><p>Write, compile and test the programs after completing the quiz. / Tulis, kompil dan uji program selepas menjawab kuiz.</p>
<article class="task"><h3>Practical 1 · Student Details / Maklumat Pelajar</h3><p>Declare suitable variables for a student name, age and mark, then display them. / Isytiharkan pemboleh ubah yang sesuai bagi nama, umur dan markah pelajar, kemudian paparkan.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;
int main() {
    string studentName = "Aina";
    int age = 19;
    double mark = 85.5;
    cout &lt;&lt; studentName &lt;&lt; " | " &lt;&lt; age &lt;&lt; " | " &lt;&lt; mark;
    return 0;
}</code></pre><p>Try changing each value and running again. / Cuba ubah setiap nilai dan jalankan semula.</p></details></article>
<article class="task"><h3>Practical 2 · Total and Average / Jumlah dan Purata</h3><p>Read three marks, calculate their total and average, and display both. Test 60, 75 and 90. / Baca tiga markah, kira jumlah dan purata, kemudian papar kedua-duanya. Uji 60, 75 dan 90.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    double a, b, c;
    cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;
    double total = a + b + c;
    double average = total / 3;
    cout &lt;&lt; "Total = " &lt;&lt; total &lt;&lt; endl;
    cout &lt;&lt; "Average = " &lt;&lt; average &lt;&lt; endl;
    return 0;
}</code></pre><p>Expected / Dijangka: Total = 225; Average = 75.</p></details></article>
<article class="task"><h3>Practical 3 · Shopping Calculator / Kalkulator Pembelian</h3><p>Read item price and quantity, calculate the total payment and display it. Test RM4.50 and 6 items. / Baca harga dan kuantiti, kira jumlah bayaran dan papar hasilnya. Uji RM4.50 dan 6 unit.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
#include &lt;iomanip&gt;
using namespace std;
int main() {
    double price;
    int quantity;
    cin &gt;&gt; price &gt;&gt; quantity;
    double total = price * quantity;
    cout &lt;&lt; fixed &lt;&lt; setprecision(2);
    cout &lt;&lt; "Total (RM) = " &lt;&lt; total;
    return 0;
}</code></pre><p>Expected / Dijangka: Total (RM) = 27.00.</p></details></article></section>`;


// MODULE 4 / MODUL 4 — detailed bilingual notes, examples and activities.
const richModule4 = [
`<div class="learning"><div class="lesson-tag">TOPIC 4.1 · CONTROL STRUCTURES / STRUKTUR KAWALAN</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Distinguish sequence, selection and repetition; trace the execution of a C++ program; and select an appropriate structure for a problem. / Membezakan jujukan, pilihan dan ulangan; menjejak pelaksanaan program C++; serta memilih struktur yang sesuai bagi sesuatu masalah.</p>
<h3>4.1.1 What is a control structure? / Apakah struktur kawalan?</h3><p>A control structure determines which statements execute and in what order. By default, C++ executes statements from top to bottom. Conditions and loops can change that flow. / Struktur kawalan menentukan arahan yang dilaksanakan dan turutannya. Secara lalai, C++ melaksanakan arahan dari atas ke bawah. Syarat dan gelung boleh mengubah aliran ini.</p>
<h3>4.1.2 Three basic structures / Tiga struktur asas</h3><table class="ipo"><thead><tr><th>Structure / Struktur</th><th>Purpose / Tujuan</th><th>Example / Contoh</th></tr></thead><tbody><tr><td>Sequence / Jujukan</td><td>Execute instructions in order / Melaksanakan arahan mengikut turutan</td><td>Input → Calculate → Display / Masukan → Kira → Papar</td></tr><tr><td>Selection / Pilihan</td><td>Choose a branch based on a condition / Memilih cabang berdasarkan syarat</td><td>if, if-else, switch</td></tr><tr><td>Repetition / Ulangan</td><td>Repeat instructions while a condition holds / Mengulangi arahan berdasarkan syarat</td><td>for, while, do-while</td></tr></tbody></table>
<h3>4.1.3 Sequence example / Contoh jujukan</h3><p>Calculate the total price of notebooks. / Kira jumlah harga buku nota.</p><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    double price = 4.50;
    int quantity = 6;
    double total = price * quantity;
    cout &lt;&lt; "Total = RM" &lt;&lt; total &lt;&lt; endl;
    return 0;
}</code></pre><p><b>Trace / Jejak:</b> price = 4.50 → quantity = 6 → total = 27 → output = Total = RM27. / Harga = 4.50 → kuantiti = 6 → jumlah = 27 → output = Total = RM27.</p>
<h3>4.1.4 Boolean conditions / Syarat Boolean</h3><p>A condition evaluates to <code>true</code> or <code>false</code>. Relational operators include <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>==</code> and <code>!=</code>. / Syarat menghasilkan nilai <code>true</code> atau <code>false</code>. Operator hubungan termasuk lebih besar, lebih kecil, sama dan tidak sama.</p><div class="note"><b>Important / Penting:</b> <code>=</code> assigns a value, but <code>==</code> compares equality. / <code>=</code> menetapkan nilai, manakala <code>==</code> membandingkan kesamaan.</div>
<h3>4.1.5 IPO and choosing a structure / IPO dan pemilihan struktur</h3><p><b>Problem / Masalah:</b> Read a mark and display PASS if it is at least 50; otherwise display FAIL. / Baca markah dan papar LULUS jika sekurang-kurangnya 50; jika tidak, papar GAGAL.</p><table class="ipo"><thead><tr><th>Input / Masukan</th><th>Process / Proses</th><th>Output / Keluaran</th></tr></thead><tbody><tr><td>mark / markah</td><td>Compare mark with 50 / Bandingkan markah dengan 50</td><td>PASS or FAIL / LULUS atau GAGAL</td></tr></tbody></table><p>Use <b>selection</b> because there are two possible outcomes. / Gunakan <b>pilihan</b> kerana terdapat dua kemungkinan keputusan.</p>
<div class="task"><b>Activity 4.1 / Aktiviti 4.1</b><p>Choose the best structure for each task: (a) display a receipt after calculating a price, (b) display PASS or FAIL, (c) print numbers 1 to 10. / Pilih struktur yang sesuai bagi (a) papar resit selepas pengiraan, (b) papar LULUS atau GAGAL, (c) papar nombor 1 hingga 10.</p><details><summary>Suggested answers / Cadangan jawapan</summary><p>(a) Sequence / Jujukan; (b) Selection / Pilihan; (c) Repetition / Ulangan.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 4.2 · SELECTION / STRUKTUR PILIHAN</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Construct <code>if</code>, <code>if-else</code>, <code>else-if</code> and <code>switch</code> statements; combine conditions; and test boundary values. / Membina pernyataan <code>if</code>, <code>if-else</code>, <code>else-if</code> dan <code>switch</code>; menggabungkan syarat; serta menguji nilai sempadan.</p>
<h3>4.2.1 Simple if / Pernyataan if tunggal</h3><p>An <code>if</code> block runs only when its condition is true. / Blok <code>if</code> dilaksanakan hanya apabila syarat benar.</p><pre><code>int mark = 80;
if (mark &gt;= 50) {
    cout &lt;&lt; "PASS";
}</code></pre><p>Output / Output: PASS. If mark is 40, this block displays nothing. / Jika markah 40, blok ini tidak memaparkan apa-apa.</p>
<h3>4.2.2 if-else / Pilihan dua hala</h3><p>Use <code>if-else</code> when exactly one of two branches must run. / Gunakan <code>if-else</code> apabila satu daripada dua cabang perlu dilaksanakan.</p><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int mark;
    cout &lt;&lt; "Enter mark: ";
    cin &gt;&gt; mark;
    if (mark &gt;= 50) {
        cout &lt;&lt; "PASS" &lt;&lt; endl;
    } else {
        cout &lt;&lt; "FAIL" &lt;&lt; endl;
    }
    return 0;
}</code></pre><p><b>Trace / Jejak:</b> mark = 49 → FAIL; mark = 50 → PASS. / markah = 49 → GAGAL; markah = 50 → LULUS.</p>
<h3>4.2.3 else-if ladder / Rantaian else-if</h3><p>Use an <code>else-if</code> ladder for several mutually exclusive ranges. Conditions are checked from top to bottom; the first matching branch runs. / Gunakan rantaian <code>else-if</code> untuk beberapa julat yang saling eksklusif. Syarat diperiksa dari atas ke bawah; cabang pertama yang benar dilaksanakan.</p><pre><code>int mark;
cin &gt;&gt; mark;
if (mark &lt; 0 || mark &gt; 100) {
    cout &lt;&lt; "INVALID";
} else if (mark &gt;= 80) {
    cout &lt;&lt; "A";
} else if (mark &gt;= 60) {
    cout &lt;&lt; "B";
} else if (mark &gt;= 50) {
    cout &lt;&lt; "C";
} else {
    cout &lt;&lt; "F";
}</code></pre><p><b>Test / Uji:</b> -1 → INVALID; 49 → F; 50 → C; 60 → B; 80 → A; 101 → INVALID. / Nilai sempadan mengesahkan setiap julat berfungsi dengan betul.</p>
<h3>4.2.4 switch / Pilihan berdasarkan nilai</h3><p><code>switch</code> selects a branch based on a matching integral or enumeration value, such as an <code>int</code> or <code>char</code>. <code>break</code> prevents unintended fall-through. / <code>switch</code> memilih cabang berdasarkan nilai integer atau enumerasi seperti <code>int</code> atau <code>char</code>. <code>break</code> mengelakkan pelaksanaan cabang berikutnya secara tidak sengaja.</p><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int choice;
    cout &lt;&lt; "1. Tea  2. Coffee  3. Water: ";
    cin &gt;&gt; choice;
    switch (choice) {
        case 1: cout &lt;&lt; "Tea"; break;
        case 2: cout &lt;&lt; "Coffee"; break;
        case 3: cout &lt;&lt; "Water"; break;
        default: cout &lt;&lt; "Invalid choice";
    }
    return 0;
}</code></pre><p>For choice 2, output is Coffee. / Bagi pilihan 2, output ialah Coffee.</p>
<h3>4.2.5 Logical operators / Operator logik</h3><table class="ipo"><thead><tr><th>Operator</th><th>Meaning / Maksud</th><th>Example / Contoh</th></tr></thead><tbody><tr><td><code>&amp;&amp;</code></td><td>AND: both true / DAN: kedua-duanya benar</td><td><code>age &gt;= 18 &amp;&amp; age &lt;= 60</code></td></tr><tr><td><code>||</code></td><td>OR: at least one true / ATAU: sekurang-kurangnya satu benar</td><td><code>mark &lt; 0 || mark &gt; 100</code></td></tr><tr><td><code>!</code></td><td>NOT: reverse truth / BUKAN: songsangkan nilai</td><td><code>!isReady</code></td></tr></tbody></table>
<div class="note"><b>Common errors / Kesilapan lazim:</b> using <code>=</code> instead of <code>==</code>; forgetting braces in complex blocks; missing <code>break</code> in a <code>switch</code>; testing only typical values. / Menggunakan <code>=</code> menggantikan <code>==</code>; terlupa kurungan berombak; tertinggal <code>break</code>; hanya menguji nilai biasa.</div>
<div class="task"><b>Activity 4.2 / Aktiviti 4.2</b><p>Modify the grading program so that 70–79 displays B+ and 60–69 displays B. Test 69, 70, 79 and 80. / Ubah program gred supaya 70–79 memaparkan B+ dan 60–69 memaparkan B. Uji 69, 70, 79 dan 80.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>After <code>mark &gt;= 80</code>, insert <code>else if (mark &gt;= 70) cout &lt;&lt; "B+";</code>, followed by <code>else if (mark &gt;= 60) cout &lt;&lt; "B";</code>. Outputs: 69 → B, 70 → B+, 79 → B+, 80 → A. / Letakkan syarat 70 sebelum syarat 60 supaya julat diperiksa dengan betul.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 4.3 · LOOPS / STRUKTUR ULANGAN</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Construct <code>for</code>, <code>while</code> and <code>do-while</code> loops; use counters and accumulators; and avoid infinite loops. / Membina gelung <code>for</code>, <code>while</code> dan <code>do-while</code>; menggunakan pembilang dan pengumpul; serta mengelakkan gelung tanpa henti.</p>
<h3>4.3.1 Why loops? / Mengapa menggunakan gelung?</h3><p>A loop repeats a block of code without writing the same statements many times. Each repetition is an iteration. / Gelung mengulangi blok kod tanpa perlu menulis arahan yang sama berkali-kali. Setiap ulangan disebut iterasi.</p>
<h3>4.3.2 for loop / Gelung for</h3><p>A <code>for</code> loop is convenient when the number of repetitions is known. Its three parts are initialization, condition and update. / Gelung <code>for</code> sesuai apabila bilangan ulangan diketahui. Tiga bahagiannya ialah nilai awal, syarat dan kemas kini.</p><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    for (int i = 1; i &lt;= 5; i++) {
        cout &lt;&lt; i &lt;&lt; " ";
    }
    return 0;
}</code></pre><p><b>Output / Output:</b> 1 2 3 4 5</p><table class="ipo"><thead><tr><th>Iteration / Iterasi</th><th>i</th><th>Condition / Syarat</th><th>Output / Keluaran</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>true / benar</td><td>1</td></tr><tr><td>2</td><td>2</td><td>true / benar</td><td>2</td></tr><tr><td>3</td><td>3</td><td>true / benar</td><td>3</td></tr><tr><td>4</td><td>4</td><td>true / benar</td><td>4</td></tr><tr><td>5</td><td>5</td><td>true / benar</td><td>5</td></tr><tr><td>Stop / Tamat</td><td>6</td><td>false / palsu</td><td>—</td></tr></tbody></table>
<h3>4.3.3 Increment and decrement operators / Operator penambahan dan pengurangan</h3>
<p><b>Increment</b> increases a variable by one, while <b>decrement</b> decreases it by one. The position of <code>++</code> or <code>--</code> determines whether the old or updated value is used in an expression. / <b>Increment</b> menambah nilai pemboleh ubah sebanyak satu, manakala <b>decrement</b> mengurangkannya sebanyak satu. Kedudukan <code>++</code> atau <code>--</code> menentukan sama ada nilai asal atau nilai baharu digunakan dalam sesuatu ungkapan.</p>
<table class="ipo"><thead><tr><th>Operator</th><th>English explanation</th><th>Penerangan Bahasa Melayu</th><th>Starting at i = 5 / Bermula i = 5</th></tr></thead><tbody>
<tr><td><code>i++</code></td><td>Post-increment: use old value first, then add 1</td><td>Pasca-tambah: gunakan nilai asal dahulu, kemudian tambah 1</td><td>Expression / Ungkapan: 5; final i / nilai akhir: 6</td></tr>
<tr><td><code>++i</code></td><td>Pre-increment: add 1 first, then use new value</td><td>Pra-tambah: tambah 1 dahulu, kemudian gunakan nilai baharu</td><td>Expression / Ungkapan: 6; final i / nilai akhir: 6</td></tr>
<tr><td><code>i--</code></td><td>Post-decrement: use old value first, then subtract 1</td><td>Pasca-tolak: gunakan nilai asal dahulu, kemudian tolak 1</td><td>Expression / Ungkapan: 5; final i / nilai akhir: 4</td></tr>
<tr><td><code>--i</code></td><td>Pre-decrement: subtract 1 first, then use new value</td><td>Pra-tolak: tolak 1 dahulu, kemudian gunakan nilai baharu</td><td>Expression / Ungkapan: 4; final i / nilai akhir: 4</td></tr>
</tbody></table>
<h3>Worked Example A: Post-increment versus pre-increment / Contoh A: Pasca-tambah berbanding pra-tambah</h3>
<pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int i = 5;
    cout &lt;&lt; i++ &lt;&lt; " " &lt;&lt; i &lt;&lt; endl; // 5 6
    i = 5;
    cout &lt;&lt; ++i &lt;&lt; " " &lt;&lt; i &lt;&lt; endl; // 6 6
    return 0;
}</code></pre>
<p><b>Output / Output:</b> First line / Baris pertama: <code>5 6</code>. Second line / Baris kedua: <code>6 6</code>. Post-increment returns the old value in the expression, but both forms leave <code>i</code> increased by one. / Pasca-tambah menggunakan nilai asal dalam ungkapan, tetapi kedua-dua bentuk akhirnya menambah <code>i</code> sebanyak satu.</p>
<h3>Worked Example B: Post-decrement versus pre-decrement / Contoh B: Pasca-tolak berbanding pra-tolak</h3>
<pre><code>int i = 5;
cout &lt;&lt; i-- &lt;&lt; " " &lt;&lt; i &lt;&lt; endl; // 5 4
i = 5;
cout &lt;&lt; --i &lt;&lt; " " &lt;&lt; i &lt;&lt; endl; // 4 4</code></pre>
<p><b>Explanation / Penerangan:</b> <code>i--</code> uses 5 before decreasing to 4; <code>--i</code> decreases to 4 before using the value. / <code>i--</code> menggunakan 5 sebelum mengurangkan kepada 4; <code>--i</code> mengurangkan kepada 4 sebelum menggunakan nilai tersebut.</p>
<h3>Worked Example C: In a for loop / Contoh C: Dalam gelung for</h3>
<pre><code>for (int i = 1; i &lt;= 5; i++) {
    cout &lt;&lt; i &lt;&lt; " ";
}
// Output: 1 2 3 4 5

for (int i = 5; i &gt;= 1; i--) {
    cout &lt;&lt; i &lt;&lt; " ";
}
// Output: 5 4 3 2 1</code></pre>
<div class="note"><b>Important / Penting:</b> When used alone as the update step of a <code>for</code> loop, <code>i++</code> and <code>++i</code> both increase <code>i</code> by 1; <code>i--</code> and <code>--i</code> both decrease it by 1. The prefix/postfix difference matters when the expression's value is used. / Apabila digunakan sendiri sebagai kemas kini gelung <code>for</code>, kedua-dua bentuk tambah menghasilkan kenaikan yang sama dan kedua-dua bentuk tolak menghasilkan penurunan yang sama. Perbezaan awalan/akhiran penting apabila nilai ungkapan digunakan. Write <code>--i</code> with the letter i, not <code>--1</code>. / Tulis <code>--i</code> dengan huruf i, bukan <code>--1</code>.</div>
<div class="task"><b>Activity 4.3A / Aktiviti 4.3A: Trace the values / Jejak nilai</b><p>Predict the displayed value and final value of <code>i</code> for each statement when <code>i</code> starts at 5: <code>cout &lt;&lt; i++;</code>, <code>cout &lt;&lt; ++i;</code>, <code>cout &lt;&lt; i--;</code> and <code>cout &lt;&lt; --i;</code>. Reset <code>i = 5</code> before each statement. / Ramalkan nilai yang dipaparkan dan nilai akhir <code>i</code>. Tetapkan semula <code>i = 5</code> sebelum setiap pernyataan.</p><details><summary>Suggested answers / Cadangan jawapan</summary><p><code>i++</code>: displays 5, final 6 / papar 5, akhir 6; <code>++i</code>: displays 6, final 6 / papar 6, akhir 6; <code>i--</code>: displays 5, final 4 / papar 5, akhir 4; <code>--i</code>: displays 4, final 4 / papar 4, akhir 4.</p></details></div>
<h3>4.3.4 while loop / Gelung while</h3><p>A <code>while</code> loop checks the condition before each iteration. It may execute zero times. / Gelung <code>while</code> menyemak syarat sebelum setiap ulangan. Ia mungkin tidak dilaksanakan langsung.</p><pre><code>int number = 1;
while (number &lt;= 3) {
    cout &lt;&lt; number &lt;&lt; " ";
    number++;
}</code></pre><p>Output / Output: 1 2 3. The increment is essential to reach the stopping condition. / Penambahan pembilang penting supaya gelung boleh tamat.</p>
<h3>4.3.5 do-while loop / Gelung do-while</h3><p>A <code>do-while</code> loop checks its condition after executing the body, so it executes at least once. / Gelung <code>do-while</code> menyemak syarat selepas melaksanakan blok, maka ia dilaksanakan sekurang-kurangnya sekali.</p><pre><code>int number = 5;
do {
    cout &lt;&lt; number &lt;&lt; endl;
    number++;
} while (number &lt;= 3);</code></pre><p>Output / Output: 5, even though the condition is false after the first iteration. / Output ialah 5 walaupun syarat palsu selepas ulangan pertama.</p>
<h3>4.3.6 Counter and accumulator / Pembilang dan pengumpul</h3><p>A counter tracks repetitions; an accumulator collects a running total. / Pembilang mengira bilangan ulangan; pengumpul mengumpulkan jumlah secara berperingkat.</p><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int total = 0;
    for (int i = 1; i &lt;= 5; i++) {
        total += i;
    }
    cout &lt;&lt; "Sum = " &lt;&lt; total;
    return 0;
}</code></pre><p>Output / Output: Sum = 15 (1 + 2 + 3 + 4 + 5). / Jumlah = 15.</p>
<h3>4.3.7 Compare the loops / Perbandingan gelung</h3><table class="ipo"><thead><tr><th>Loop / Gelung</th><th>Condition checked / Syarat diperiksa</th><th>Best use / Kegunaan</th></tr></thead><tbody><tr><td>for</td><td>Before / Sebelum</td><td>Known number of iterations / Bilangan ulangan diketahui</td></tr><tr><td>while</td><td>Before / Sebelum</td><td>Repeat while condition remains true / Ulang selagi syarat benar</td></tr><tr><td>do-while</td><td>After / Selepas</td><td>Menu or prompt that must run once / Menu atau arahan yang perlu dijalankan sekali</td></tr></tbody></table>
<div class="note"><b>Common errors / Kesilapan lazim:</b> missing update causes an infinite loop; using <code>&lt;</code> instead of <code>&lt;=</code> causes an off-by-one error; forgetting the semicolon after <code>do-while</code>. / Tiada kemas kini menyebabkan gelung tanpa henti; operator sempadan yang salah menyebabkan bilangan ulangan tersasar; titik koma selepas <code>do-while</code> mesti ada.</div>
<div class="task"><b>Activity 4.3 / Aktiviti 4.3</b><p>Write a <code>for</code> loop to display even numbers 2, 4, 6, 8 and 10. Then rewrite it using <code>while</code>. / Tulis gelung <code>for</code> untuk memaparkan nombor genap 2, 4, 6, 8 dan 10. Kemudian tulis semula menggunakan <code>while</code>.</p><details><summary>Suggested answer / Cadangan jawapan</summary><pre><code>for (int i = 2; i &lt;= 10; i += 2) {
    cout &lt;&lt; i &lt;&lt; " ";
}

int i = 2;
while (i &lt;= 10) {
    cout &lt;&lt; i &lt;&lt; " ";
    i += 2;
}</code></pre><p>Both display 2 4 6 8 10. / Kedua-duanya memaparkan 2 4 6 8 10.</p></details></div></div>`
];

const practicalModule4 = `<section class="practicals"><h2>Practical Exercises / Latihan Praktikal — Modul 4</h2><p>Complete all three tasks using a C++ compiler. Record your source code, input, expected output and actual output. / Lengkapkan ketiga-tiga tugasan menggunakan pengkompil C++. Rekodkan kod sumber, input, output dijangka dan output sebenar.</p>
<article class="task"><h3>Practical 1 · Pass/Fail Validator / Pengesahan Lulus/Gagal</h3><p><b>Task / Tugasan:</b> Read a mark from 0 to 100. Display INVALID for values outside the range, PASS for 50–100 and FAIL for 0–49. Test -1, 49, 50, 100 and 101. / Baca markah 0 hingga 100. Paparkan INVALID jika di luar julat, PASS bagi 50–100 dan FAIL bagi 0–49. Uji -1, 49, 50, 100 dan 101.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int mark;
    cout &lt;&lt; "Enter mark: ";
    cin &gt;&gt; mark;
    if (mark &lt; 0 || mark &gt; 100) {
        cout &lt;&lt; "INVALID";
    } else if (mark &gt;= 50) {
        cout &lt;&lt; "PASS";
    } else {
        cout &lt;&lt; "FAIL";
    }
    return 0;
}</code></pre><p>Expected / Dijangka: -1 → INVALID; 49 → FAIL; 50 → PASS; 100 → PASS; 101 → INVALID.</p></details></article>
<article class="task"><h3>Practical 2 · Multiplication Table / Sifir Darab</h3><p><b>Task / Tugasan:</b> Read an integer and display its multiplication table from 1 to 10 using <code>for</code>. Test with 3. / Baca satu integer dan papar sifir 1 hingga 10 menggunakan <code>for</code>. Uji dengan 3.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int number;
    cout &lt;&lt; "Enter number: ";
    cin &gt;&gt; number;
    for (int i = 1; i &lt;= 10; i++) {
        cout &lt;&lt; number &lt;&lt; " x " &lt;&lt; i
             &lt;&lt; " = " &lt;&lt; number * i &lt;&lt; endl;
    }
    return 0;
}</code></pre><p>Expected / Dijangka: first line / baris pertama: 3 x 1 = 3; last line / baris akhir: 3 x 10 = 30.</p></details></article>
<article class="task"><h3>Practical 3 · Menu-Based Calculator / Kalkulator Bermenu</h3><p><b>Task / Tugasan:</b> Create a menu: 1 Add, 2 Subtract, 3 Multiply, 0 Exit. Use <code>do-while</code> to repeat the menu and <code>switch</code> to process a selection. For operations 1–3, read two numbers. / Bina menu: 1 Tambah, 2 Tolak, 3 Darab, 0 Keluar. Gunakan <code>do-while</code> untuk mengulangi menu dan <code>switch</code> untuk memproses pilihan. Bagi operasi 1–3, baca dua nombor.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int choice;
    double a, b;
    do {
        cout &lt;&lt; "1 Add  2 Subtract  3 Multiply  0 Exit: ";
        cin &gt;&gt; choice;
        if (choice &gt;= 1 &amp;&amp; choice &lt;= 3) {
            cout &lt;&lt; "Enter two numbers: ";
            cin &gt;&gt; a &gt;&gt; b;
        }
        switch (choice) {
            case 1: cout &lt;&lt; "Result = " &lt;&lt; a + b &lt;&lt; endl; break;
            case 2: cout &lt;&lt; "Result = " &lt;&lt; a - b &lt;&lt; endl; break;
            case 3: cout &lt;&lt; "Result = " &lt;&lt; a * b &lt;&lt; endl; break;
            case 0: cout &lt;&lt; "Goodbye" &lt;&lt; endl; break;
            default: cout &lt;&lt; "Invalid choice" &lt;&lt; endl;
        }
    } while (choice != 0);
    return 0;
}</code></pre><p>Test / Ujian: choose 1 with 4 and 6 → Result = 10; choose 3 with 4 and 6 → Result = 24; choose 0 → Goodbye. / Pilih 1 dengan 4 dan 6 → Hasil 10; pilih 3 → Hasil 24; pilih 0 → Tamat.</p></details></article></section>`;


// MODULE 5 / MODUL 5 — detailed bilingual notes.
const richModule5 = [
`<div class="learning"><div class="lesson-tag">TOPIC 5.1 · ARRAYS / TATASUSUNAN</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Define arrays, declare and initialise one-dimensional arrays, and access or modify elements safely. / Mentakrifkan tatasusunan, mengisytiharkan dan memberikan nilai awal kepada tatasusunan satu dimensi serta mengakses atau mengubah elemen dengan selamat.</p>
<h3>5.1.1 Definition / Definisi</h3><p>An <b>array</b> stores a fixed number of elements of the same data type under one name. / <b>Tatasusunan</b> menyimpan bilangan elemen tetap daripada jenis data yang sama menggunakan satu nama.</p>
<p>Example / Contoh: <code>int marks[5] = {70, 80, 90, 60, 85};</code> stores five integer marks. / Menyimpan lima markah integer.</p>
<h3>5.1.2 Array declaration / Pengisytiharan tatasusunan</h3><pre><code>int marks[5];                 // Declare five integers / Isytihar lima integer
int scores[3] = {70, 80, 90}; // Declare and initialise / Isytihar dan isi nilai
double prices[3] = {2.50, 4.00, 6.75};
char grades[3] = {'A', 'B', 'C'};</code></pre>
<table class="ipo"><thead><tr><th>Part / Bahagian</th><th>Explanation / Penerangan</th></tr></thead><tbody><tr><td><code>int</code></td><td>Element data type / Jenis data elemen</td></tr><tr><td><code>marks</code></td><td>Array name / Nama tatasusunan</td></tr><tr><td><code>[5]</code></td><td>Capacity of five elements / Kapasiti lima elemen</td></tr><tr><td><code>{70,80,90,60,85}</code></td><td>Initial values / Nilai awal</td></tr></tbody></table>
<h3>5.1.3 Array index / Indeks tatasusunan</h3><p>Indices start at <b>0</b>, not 1. For an array with five elements, valid indices are <code>0</code> through <code>4</code>. / Indeks bermula pada <b>0</b>, bukannya 1. Bagi lima elemen, indeks sah ialah <code>0</code> hingga <code>4</code>.</p>
<table class="ipo"><thead><tr><th>Index / Indeks</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead><tbody><tr><td>Value / Nilai</td><td>70</td><td>80</td><td>90</td><td>60</td><td>85</td></tr></tbody></table>
<h3>5.1.4 Reading and updating / Membaca dan mengubah nilai</h3><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int marks[5] = {70, 80, 90, 60, 85};
    cout &lt;&lt; marks[0] &lt;&lt; endl; // First / Pertama: 70
    cout &lt;&lt; marks[2] &lt;&lt; endl; // Third / Ketiga: 90
    marks[1] = 95;             // Update second / Ubah kedua
    cout &lt;&lt; marks[1] &lt;&lt; endl; // 95
    return 0;
}</code></pre><p><b>Output / Output:</b> 70, 90, 95 (on separate lines / pada baris berasingan).</p>
<div class="note"><b>Important / Penting:</b> Accessing <code>marks[5]</code> is out of bounds for a five-element array and causes undefined behaviour in C++. / Mengakses <code>marks[5]</code> melebihi julat indeks sah dan menyebabkan tingkah laku tidak ditentukan. An uninitialised local integer array also contains indeterminate values; initialise elements before reading. / Tatasusunan integer setempat tanpa nilai awal tidak boleh dibaca sebelum diisi.</div>
<div class="task"><b>Activity 5.1 / Aktiviti 5.1</b><p>Given <code>int numbers[4] = {4, 8, 12, 16};</code>, identify the first and last elements, then change the third element to 20. / Kenal pasti elemen pertama dan terakhir, kemudian tukar elemen ketiga kepada 20.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>First / Pertama: <code>numbers[0] = 4</code>; last / terakhir: <code>numbers[3] = 16</code>; update / ubah: <code>numbers[2] = 20;</code>.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 5.1 · PROCESSING ARRAYS WITH LOOPS / MEMPROSES TATASUSUNAN DENGAN GELUNG</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Traverse an array using a loop, accept multiple inputs, and compute the total and average. / Melintasi elemen tatasusunan menggunakan gelung, menerima beberapa input serta mengira jumlah dan purata.</p>
<h3>5.1.5 Traversing an array / Melintasi tatasusunan</h3><p>A <code>for</code> loop visits each index from 0 up to <code>size - 1</code>. / Gelung <code>for</code> mengakses setiap indeks dari 0 hingga <code>saiz - 1</code>.</p>
<pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int marks[5] = {70, 80, 90, 60, 85};
    for (int i = 0; i &lt; 5; i++) {
        cout &lt;&lt; "Student " &lt;&lt; i + 1 &lt;&lt; ": " &lt;&lt; marks[i] &lt;&lt; endl;
    }
    return 0;
}</code></pre>
<p><b>Trace / Jejak:</b> <code>i=0</code> reads <code>marks[0]</code> (70); <code>i=1</code> reads 80; continue until <code>i=4</code> reads 85. / Pembilang bermula 0 dan berhenti selepas indeks 4.</p>
<h3>5.1.6 Input into arrays / Memasukkan nilai ke dalam tatasusunan</h3><pre><code>int marks[3];
for (int i = 0; i &lt; 3; i++) {
    cout &lt;&lt; "Enter mark " &lt;&lt; i + 1 &lt;&lt; ": ";
    cin &gt;&gt; marks[i];
}</code></pre><p>Each input is stored at the corresponding index. / Setiap input disimpan pada indeks yang sepadan.</p>
<h3>5.1.7 Total and average / Jumlah dan purata</h3><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int marks[5] = {70, 80, 90, 60, 85};
    int total = 0;
    for (int i = 0; i &lt; 5; i++) {
        total += marks[i]; // total = total + marks[i]
    }
    double average = static_cast&lt;double&gt;(total) / 5;
    cout &lt;&lt; "Total = " &lt;&lt; total &lt;&lt; endl;
    cout &lt;&lt; "Average = " &lt;&lt; average &lt;&lt; endl;
    return 0;
}</code></pre><p><b>Output / Output:</b> Total = 385; Average = 77. / Jumlah = 385; Purata = 77.</p>
<table class="ipo"><thead><tr><th>i</th><th>marks[i]</th><th>Running total / Jumlah terkumpul</th></tr></thead><tbody><tr><td>0</td><td>70</td><td>70</td></tr><tr><td>1</td><td>80</td><td>150</td></tr><tr><td>2</td><td>90</td><td>240</td></tr><tr><td>3</td><td>60</td><td>300</td></tr><tr><td>4</td><td>85</td><td>385</td></tr></tbody></table>
<div class="note"><b>Why cast? / Mengapa penukaran jenis?</b> Dividing two integers performs integer division. <code>static_cast&lt;double&gt;(total)</code> allows a decimal average when necessary. / Pembahagian dua integer membuang bahagian perpuluhan; penukaran kepada <code>double</code> mengekalkan purata perpuluhan.</div>
<div class="task"><b>Activity 5.2 / Aktiviti 5.2</b><p>Calculate the total and average of <code>{10, 20, 30, 40}</code> using a loop. / Kira jumlah dan purata menggunakan gelung.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>Total / Jumlah = 100; average / purata = 25. Use <code>for(int i=0; i&lt;4; i++) total += values[i];</code>. / Gunakan gelung bagi indeks 0 hingga 3.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 5.1 · ARRAY ANALYSIS AND SAFETY / ANALISIS DAN KESELAMATAN TATASUSUNAN</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Find maximum and minimum values, search for a target, and avoid common array errors. / Mencari nilai tertinggi dan terendah, mencari nilai sasaran serta mengelakkan ralat lazim tatasusunan.</p>
<h3>5.1.8 Finding maximum and minimum / Mencari nilai maksimum dan minimum</h3><p>Start with the first element, then compare each subsequent value. / Mulakan dengan elemen pertama, kemudian bandingkan setiap nilai berikutnya.</p><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int marks[5] = {70, 80, 90, 60, 85};
    int highest = marks[0];
    int lowest = marks[0];
    for (int i = 1; i &lt; 5; i++) {
        if (marks[i] &gt; highest) highest = marks[i];
        if (marks[i] &lt; lowest) lowest = marks[i];
    }
    cout &lt;&lt; "Highest = " &lt;&lt; highest &lt;&lt; endl;
    cout &lt;&lt; "Lowest = " &lt;&lt; lowest &lt;&lt; endl;
    return 0;
}</code></pre><p><b>Output / Output:</b> Highest = 90; Lowest = 60. / Tertinggi = 90; Terendah = 60.</p>
<h3>5.1.9 Linear search / Carian linear</h3><p>Check elements one by one until a matching value is found. / Semak elemen satu demi satu sehingga nilai yang dicari ditemui.</p><pre><code>int numbers[5] = {12, 24, 36, 48, 60};
int target = 36;
int foundIndex = -1;
for (int i = 0; i &lt; 5; i++) {
    if (numbers[i] == target) {
        foundIndex = i;
        break;
    }
}
if (foundIndex != -1) cout &lt;&lt; "Found at index " &lt;&lt; foundIndex;
else cout &lt;&lt; "Not found";</code></pre><p><b>Output / Output:</b> Found at index 2. / Ditemui pada indeks 2.</p>
<h3>5.1.10 Common mistakes / Kesilapan lazim</h3><table class="ipo"><thead><tr><th>Mistake / Kesilapan</th><th>Correct approach / Cara betul</th></tr></thead><tbody><tr><td>Loop uses <code>i &lt;= 5</code> for a five-element array / Gelung sampai indeks 5</td><td>Use <code>i &lt; 5</code>; valid indices 0–4 / Gunakan indeks 0–4</td></tr><tr><td>Read an uninitialised element / Membaca elemen tanpa nilai awal</td><td>Initialise or input before reading / Isi nilai dahulu</td></tr><tr><td>Set maximum to zero for all-negative values / Tetapkan maksimum 0 bagi nilai negatif</td><td>Start from <code>numbers[0]</code> / Mulakan daripada elemen pertama</td></tr><tr><td>Use integer division for a decimal average / Bahagi integer untuk purata perpuluhan</td><td>Convert to <code>double</code> / Tukar kepada double</td></tr></tbody></table>
<div class="note"><b>Further learning / Pembelajaran lanjutan:</b> Built-in C++ arrays have a fixed size. Later, students may learn <code>std::array</code> and <code>std::vector</code> for safer or more flexible data handling. / Tatasusunan C++ biasa bersaiz tetap; <code>std::array</code> dan <code>std::vector</code> boleh dipelajari kemudian.</div>
<div class="task"><b>Activity 5.3 / Aktiviti 5.3</b><p>For <code>{9, 4, 12, 7}</code>, identify the highest, lowest and index of 12. / Kenal pasti nilai tertinggi, terendah dan indeks bagi 12.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p>Highest / Tertinggi = 12; lowest / Terendah = 4; index / indeks of 12 = 2.</p></details></div></div>`
];

const practicalModule5=`<section class="practicals"><h2>Practical Exercises / Latihan Praktikal — Modul 5</h2><p>Compile and test each C++ program. / Kompil dan uji setiap program C++.</p>
<article class="task"><h3>Practical 1 · Student Marks / Markah Pelajar</h3><p>Declare an array of five marks, display all values with a loop and update the second mark to 95. / Isytiharkan lima markah, paparkan semuanya menggunakan gelung dan ubah markah kedua kepada 95.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int marks[5] = {70, 80, 90, 60, 85};
    marks[1] = 95;
    for (int i = 0; i &lt; 5; i++) cout &lt;&lt; marks[i] &lt;&lt; " ";
    return 0;
}</code></pre><p>Expected / Dijangka: 70 95 90 60 85.</p></details></article>
<article class="task"><h3>Practical 2 · Total and Average / Jumlah dan Purata</h3><p>Read five integer marks and display their total and decimal average. Test 60, 70, 80, 90, 95. / Baca lima markah integer dan papar jumlah serta purata perpuluhan. Uji nilai yang diberi.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int marks[5], total = 0;
    for (int i = 0; i &lt; 5; i++) cin &gt;&gt; marks[i];
    for (int i = 0; i &lt; 5; i++) total += marks[i];
    double average = static_cast&lt;double&gt;(total) / 5;
    cout &lt;&lt; "Total = " &lt;&lt; total &lt;&lt; endl;
    cout &lt;&lt; "Average = " &lt;&lt; average &lt;&lt; endl;
    return 0;
}</code></pre><p>Expected / Dijangka: Total = 395; Average = 79.</p></details></article>
<article class="task"><h3>Practical 3 · Highest, Lowest and Search / Tertinggi, Terendah dan Carian</h3><p>For five integers, display the maximum, minimum and index of target 12. Use <code>{9, 4, 12, 7, 6}</code>. / Bagi lima integer, papar maksimum, minimum dan indeks bagi sasaran 12.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int values[5] = {9, 4, 12, 7, 6};
    int highest = values[0], lowest = values[0];
    int index = -1;
    for (int i = 0; i &lt; 5; i++) {
        if (values[i] &gt; highest) highest = values[i];
        if (values[i] &lt; lowest) lowest = values[i];
        if (values[i] == 12) index = i;
    }
    cout &lt;&lt; "Highest = " &lt;&lt; highest &lt;&lt; endl;
    cout &lt;&lt; "Lowest = " &lt;&lt; lowest &lt;&lt; endl;
    cout &lt;&lt; "Target index = " &lt;&lt; index &lt;&lt; endl;
    return 0;
}</code></pre><p>Expected / Dijangka: Highest = 12; Lowest = 4; Target index = 2.</p></details></article></section>`;

const richModule6 = [
`<div class="learning"><div class="lesson-tag">TOPIC 6.1 · BUILD FUNCTIONS / MEMBINA FUNGSI</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Explain functions, identify return types, construct reusable functions and distinguish library functions from user-defined functions. / Menerangkan fungsi, mengenal pasti jenis pulangan, membina fungsi yang boleh digunakan semula serta membezakan fungsi pustaka dan fungsi takrifan pengguna.</p>
<h3>6.1.1 Definition / Definisi</h3><p>A <b>function</b> is a named block of statements that performs a specific task. A function runs when called. / <b>Fungsi</b> ialah blok arahan bernama yang melaksanakan tugas tertentu. Fungsi dijalankan apabila dipanggil.</p><div class="note"><b>Why use functions? / Mengapa menggunakan fungsi?</b> Reusability, readability, easier testing and maintenance. / Kod boleh digunakan semula, lebih mudah dibaca, diuji dan diselenggara.</div>
<h3>6.1.2 Function categories / Kategori fungsi</h3><table class="ipo"><thead><tr><th>Category / Kategori</th><th>Explanation / Penerangan</th><th>Example / Contoh</th></tr></thead><tbody><tr><td>Library / Pustaka</td><td>Provided by a library / Disediakan oleh pustaka</td><td><code>sqrt(25)</code> in <code>&lt;cmath&gt;</code></td></tr><tr><td>User-defined / Takrifan pengguna</td><td>Written by programmer / Ditulis oleh pengatur cara</td><td><code>int add(int a, int b)</code></td></tr></tbody></table>
<h3>6.1.3 Function anatomy / Struktur fungsi</h3><pre><code>returnType functionName(parameters) {
    // statements / arahan
    return value; // if non-void / jika bukan void
}</code></pre><table class="ipo"><thead><tr><th>Part / Bahagian</th><th>Meaning / Maksud</th></tr></thead><tbody><tr><td>Return type / Jenis pulangan</td><td><code>int</code>, <code>double</code> or <code>void</code> / Jenis nilai yang dipulangkan</td></tr><tr><td>Function name / Nama fungsi</td><td>Meaningful identifier / Pengecam bermakna</td></tr><tr><td>Parameters / Parameter</td><td>Inputs received by function / Input diterima fungsi</td></tr><tr><td>Body / Badan</td><td>Statements in braces / Arahan dalam kurungan berombak</td></tr><tr><td><code>return</code></td><td>Sends a value to caller / Memulangkan nilai kepada pemanggil</td></tr></tbody></table>
<h3>6.1.4 Complete example / Contoh lengkap</h3><pre><code>#include &lt;iostream&gt;
using namespace std;

int square(int number) {
    return number * number;
}

int main() {
    cout &lt;&lt; "Square = " &lt;&lt; square(5) &lt;&lt; endl;
    return 0;
}</code></pre><p><b>Output / Output:</b> Square = 25. The argument 5 is passed to <code>number</code>, then 25 is returned. / Argumen 5 dihantar kepada <code>number</code>, kemudian nilai 25 dipulangkan.</p>
<h3>6.1.5 void versus returning a value / void berbanding pulangan nilai</h3><pre><code>void greet() {
    cout &lt;&lt; "Welcome!" &lt;&lt; endl;
}

double half(double x) {
    return x / 2;
}</code></pre><p><code>void</code> does not return a value; <code>double</code> returns a decimal value. / <code>void</code> tidak memulangkan nilai; <code>double</code> memulangkan nilai perpuluhan.</p>
<div class="task"><b>Activity 6.1 / Aktiviti 6.1</b><p>Write a function <code>int triple(int x)</code> that returns three times its argument. Predict <code>triple(4)</code>. / Bina fungsi yang memulangkan tiga kali ganda argumen dan ramalkan hasilnya.</p><details><summary>Suggested answer / Cadangan jawapan</summary><pre><code>int triple(int x) {
    return 3 * x;
}</code></pre><p><code>triple(4)</code> returns 12. / Memulangkan 12.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 6.2 · FUNCTION PROTOTYPE, DEFINITION AND CALL / PROTOTAIP, DEFINISI DAN PANGGILAN</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Distinguish function prototype, function definition and function call; arrange them correctly in a C++ program. / Membezakan prototaip, definisi dan panggilan fungsi serta menyusunnya dengan betul dalam program C++.</p>
<h3>6.2.1 Three essential elements / Tiga elemen penting</h3><table class="ipo"><thead><tr><th>Element / Elemen</th><th>Purpose / Tujuan</th><th>Example / Contoh</th></tr></thead><tbody><tr><td>Prototype / Prototaip</td><td>Declares the function interface before use / Mengisytiharkan fungsi sebelum digunakan</td><td><code>int add(int, int);</code></td></tr><tr><td>Definition / Definisi</td><td>Contains statements that perform the work / Mengandungi arahan pelaksanaan</td><td><code>int add(int a,int b) { return a+b; }</code></td></tr><tr><td>Call / Panggilan</td><td>Invokes the function / Memanggil fungsi</td><td><code>add(2, 3)</code></td></tr></tbody></table>
<h3>6.2.2 Full program / Program lengkap</h3><pre><code>#include &lt;iostream&gt;
using namespace std;

// 1. Prototype / Prototaip
int add(int a, int b);

int main() {
    // 2. Call / Panggilan
    int result = add(8, 4);
    cout &lt;&lt; "Sum = " &lt;&lt; result &lt;&lt; endl;
    return 0;
}

// 3. Definition / Definisi
int add(int a, int b) {
    return a + b;
}</code></pre><p><b>Output / Output:</b> Sum = 12. Execution begins at <code>main()</code>, the call transfers control to <code>add</code>, and <code>return</code> sends the result back. / Pelaksanaan bermula pada <code>main()</code>, panggilan membawa kawalan kepada <code>add</code>, dan <code>return</code> menghantar hasil semula.</p>
<h3>6.2.3 Function execution flow / Aliran pelaksanaan fungsi</h3><div class="process-flow"><span>main()</span><b>→</b><span>add(8,4)</span><b>→</b><span>return 12</span><b>→</b><span>cout</span></div>
<h3>6.2.4 Prototype rules / Peraturan prototaip</h3><ul><li>Include return type, name and parameter types; end with a semicolon. / Sertakan jenis pulangan, nama dan jenis parameter; akhiri dengan titik koma.</li><li>Parameter names in a prototype are optional: <code>int add(int, int);</code> is valid. / Nama parameter dalam prototaip adalah pilihan.</li><li>The prototype and definition must agree on return and parameter types. / Jenis pulangan dan parameter mesti sepadan.</li><li>A separate prototype is unnecessary when the full definition appears before the call. / Prototaip berasingan tidak diperlukan jika definisi penuh ditulis sebelum panggilan.</li></ul>
<h3>6.2.5 Common errors / Kesilapan lazim</h3><table class="ipo"><thead><tr><th>Error / Ralat</th><th>Correction / Pembetulan</th></tr></thead><tbody><tr><td><code>int add(int,int)</code> as prototype</td><td>Add <code>;</code> / Tambah titik koma</td></tr><tr><td><code>add(5)</code> for two required arguments</td><td>Pass two arguments / Hantar dua argumen</td></tr><tr><td><code>void add(...)</code> prototype, <code>int add(...)</code> definition</td><td>Match return types / Samakan jenis pulangan</td></tr></tbody></table>
<div class="task"><b>Activity 6.2 / Aktiviti 6.2</b><p>Identify the prototype, call and definition in the example. Then change <code>add</code> to <code>multiply</code> and predict the result for 8 and 4. / Kenal pasti prototaip, panggilan dan definisi; ubah fungsi kepada darab.</p><details><summary>Suggested answer / Cadangan jawapan</summary><pre><code>int multiply(int a, int b); // prototype
// inside main: int result = multiply(8, 4); // call
int multiply(int a, int b) { // definition
    return a * b;
}</code></pre><p>Output / Output: 32.</p></details></div></div>`,
`<div class="learning"><div class="lesson-tag">TOPIC 6.3 · PARAMETER PASSING / TEKNIK PENGHANTARAN PARAMETER</div>
<h3>Learning Outcomes / Hasil Pembelajaran</h3><p>Explain arguments and parameters, compare pass by value and pass by reference, and trace changes to variables. / Menerangkan argumen dan parameter, membandingkan penghantaran secara nilai dan rujukan serta menjejak perubahan pemboleh ubah.</p>
<h3>6.3.1 Parameter versus argument / Parameter berbanding argumen</h3><p>A <b>parameter</b> is a variable declared in a function header. An <b>argument</b> is the actual value supplied during a call. / <b>Parameter</b> ialah pemboleh ubah dalam pengepala fungsi. <b>Argumen</b> ialah nilai sebenar yang dihantar ketika panggilan.</p><pre><code>int doubleIt(int x) { // x is parameter / x ialah parameter
    return x * 2;
}
// doubleIt(6); // 6 is argument / 6 ialah argumen</code></pre>
<h3>6.3.2 Pass by value / Penghantaran secara nilai</h3><p>The function receives a copy. Changing the parameter does not change the caller's variable. / Fungsi menerima salinan. Mengubah parameter tidak mengubah pemboleh ubah asal.</p><pre><code>#include &lt;iostream&gt;
using namespace std;

void increase(int x) {
    x = x + 1;
    cout &lt;&lt; "Inside = " &lt;&lt; x &lt;&lt; endl;
}
int main() {
    int number = 5;
    increase(number);
    cout &lt;&lt; "Outside = " &lt;&lt; number &lt;&lt; endl;
    return 0;
}</code></pre><p><b>Output / Output:</b> Inside = 6; Outside = 5. / Di dalam fungsi 6; di luar fungsi kekal 5.</p>
<h3>6.3.3 Pass by reference / Penghantaran secara rujukan</h3><p>A reference parameter uses <code>&amp;</code> and refers to the caller's variable. Changes affect the original. / Parameter rujukan menggunakan <code>&amp;</code> dan merujuk pemboleh ubah asal. Perubahan turut mengubah nilai asal.</p><pre><code>#include &lt;iostream&gt;
using namespace std;

void increase(int &amp;x) {
    x = x + 1;
}
int main() {
    int number = 5;
    increase(number);
    cout &lt;&lt; "Outside = " &lt;&lt; number &lt;&lt; endl;
    return 0;
}</code></pre><p><b>Output / Output:</b> Outside = 6. / Nilai asal berubah kepada 6.</p>
<h3>6.3.4 Comparison / Perbandingan</h3><table class="ipo"><thead><tr><th>Aspect / Aspek</th><th>By value / Secara nilai</th><th>By reference / Secara rujukan</th></tr></thead><tbody><tr><td>Syntax / Sintaks</td><td><code>int x</code></td><td><code>int &amp;x</code></td></tr><tr><td>Data / Data</td><td>Copy / Salinan</td><td>Original variable / Pemboleh ubah asal</td></tr><tr><td>Change original? / Ubah nilai asal?</td><td>No / Tidak</td><td>Yes / Ya</td></tr><tr><td>Use case / Kegunaan</td><td>Input without modification / Input tanpa ubah</td><td>Modify caller data / Ubah data pemanggil</td></tr></tbody></table>
<h3>6.3.5 Worked example: Swap / Contoh: Tukar nilai</h3><pre><code>#include &lt;iostream&gt;
using namespace std;

void swapValues(int &amp;a, int &amp;b) {
    int temp = a;
    a = b;
    b = temp;
}
int main() {
    int first = 10, second = 20;
    swapValues(first, second);
    cout &lt;&lt; first &lt;&lt; " " &lt;&lt; second;
    return 0;
}</code></pre><p><b>Output / Output:</b> 20 10. Both original variables change because references are used. / Kedua-dua pemboleh ubah asal berubah kerana rujukan digunakan.</p>
<div class="note"><b>Best practice / Amalan baik:</b> Use <code>const int &amp;x</code> when you need a read-only reference, particularly for large objects; for small integers, pass by value is usually simple. / Gunakan rujukan <code>const</code> untuk bacaan sahaja, khususnya objek besar; bagi integer kecil, penghantaran secara nilai biasanya mudah.</div>
<div class="task"><b>Activity 6.3 / Aktiviti 6.3</b><p>Predict the final value of <code>n</code> after calling <code>void change(int &amp;x) { x += 3; }</code> with <code>n = 7</code>. / Ramalkan nilai akhir <code>n</code> selepas fungsi dipanggil.</p><details><summary>Suggested answer / Cadangan jawapan</summary><p><code>n = 10</code>, because <code>x</code> is a reference to <code>n</code>. / Nilai menjadi 10 kerana <code>x</code> merujuk kepada <code>n</code>.</p></details></div></div>`
];

const practicalModule6=`<section class="practicals"><h2>Practical Exercises / Latihan Praktikal — Modul 6</h2><p>Write, compile and test each complete C++ program. / Tulis, kompil dan uji setiap program C++ lengkap.</p>
<article class="task"><h3>Practical 1 · Rectangle Area Function / Fungsi Luas Segi Empat</h3><p>Build <code>double area(double length, double width)</code> that returns the rectangle area. Call it from <code>main()</code>. Test 8 and 5. / Bina fungsi luas dan panggil dari <code>main()</code>. Uji 8 dan 5.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
double area(double length, double width);
int main() {
    cout &lt;&lt; "Area = " &lt;&lt; area(8, 5);
    return 0;
}
double area(double length, double width) {
    return length * width;
}</code></pre><p>Expected / Dijangka: Area = 40.</p></details></article>
<article class="task"><h3>Practical 2 · Pass or Fail Function / Fungsi Lulus atau Gagal</h3><p>Write a <code>void showResult(int mark)</code> function that displays INVALID for marks outside 0–100, PASS for 50–100, and FAIL otherwise. Test 49, 50 and 110. / Tulis fungsi yang memaparkan INVALID, PASS atau FAIL mengikut markah.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
void showResult(int mark);
int main() {
    showResult(49);
    showResult(50);
    showResult(110);
    return 0;
}
void showResult(int mark) {
    if (mark &lt; 0 || mark &gt; 100) cout &lt;&lt; "INVALID" &lt;&lt; endl;
    else if (mark &gt;= 50) cout &lt;&lt; "PASS" &lt;&lt; endl;
    else cout &lt;&lt; "FAIL" &lt;&lt; endl;
}</code></pre><p>Expected / Dijangka: FAIL, PASS, INVALID (separate lines / baris berasingan).</p></details></article>
<article class="task"><h3>Practical 3 · Swap by Reference / Tukar Nilai Secara Rujukan</h3><p>Write <code>void swapValues(int &amp;a, int &amp;b)</code>. Read two integers, swap them, and display the results. Test 12 and 25. / Bina fungsi pertukaran nilai secara rujukan. Baca dua integer dan paparkan selepas ditukar.</p><details><summary>Suggested solution / Cadangan penyelesaian</summary><pre><code>#include &lt;iostream&gt;
using namespace std;
void swapValues(int &amp;a, int &amp;b);
int main() {
    int a, b;
    cin &gt;&gt; a &gt;&gt; b;
    swapValues(a, b);
    cout &lt;&lt; a &lt;&lt; " " &lt;&lt; b &lt;&lt; endl;
    return 0;
}
void swapValues(int &amp;a, int &amp;b) {
    int temp = a;
    a = b;
    b = temp;
}</code></pre><p>Input / Input: 12 25 → Output / Output: 25 12.</p></details></article></section>`;

const questions=[
[{q:'Which PLC phase normally precedes coding?',a:['Maintenance','Program design','Documentation'],correct:1},{q:'Which phase checks whether a program produces expected results?',a:['Testing','Problem definition','Coding'],correct:0},{q:'What does IPO stand for?',a:['Input Process Output','Internal Program Operation','Input Print Object'],correct:0},{q:'Which is an input for calculating rectangle area?',a:['Calculated area','Length and width','Area formula'],correct:1},{q:'Which is the correct area formula?',a:['length + width','2 × (length + width)','length × width'],correct:2},{q:'Which property describes a valid algorithm?',a:['Finite and unambiguous steps','No stopping condition','Only written in C++'],correct:0},{q:'Which flowchart symbol represents a decision?',a:['Rectangle','Diamond','Oval'],correct:1},{q:'Which flowchart symbol represents input/output?',a:['Parallelogram','Diamond','Rectangle'],correct:0},{q:'Which pseudocode structure chooses between PASS and FAIL?',a:['WHILE','IF ... ELSE','OUTPUT only'],correct:1},{q:'For marks 60, 75, 90, what is the average?',a:['70','75','80'],correct:1}],
 [{q:"Which function is the entry point of a typical C++ program? / Fungsi manakah menjadi titik permulaan program C++?",a:["start()","main()","begin()"],correct:1},{q:"Which directive provides standard input/output facilities? / Arahan manakah menyediakan kemudahan input/output standard?",a:["#include <iostream>","#include <math>","return 0;"],correct:0},{q:"Which statement displays text on screen? / Arahan manakah memaparkan teks pada skrin?",a:["cin >> name;","cout << \"Hello\";","int main();"],correct:1},{q:"What is the purpose of return 0; in main()? / Apakah tujuan return 0; dalam main()?",a:["Read keyboard input / Membaca input papan kekunci","Indicate successful completion / Menandakan program tamat dengan jayanya","Declare a variable / Mengisytiharkan pemboleh ubah"],correct:1},{q:"Which is a valid C++ identifier? / Yang manakah pengecam C++ yang sah?",a:["2marks","total marks","totalMarks"],correct:2},{q:"Which data type stores a whole number? / Jenis data manakah menyimpan nombor bulat?",a:["int","char","bool"],correct:0},{q:"Which data type is suitable for a decimal price? / Jenis data manakah sesuai untuk harga perpuluhan?",a:["bool","double","char"],correct:1},{q:"What is the usual source file extension for C++? / Apakah sambungan fail sumber C++ yang lazim?",a:[".cpp",".jpg",".pptx"],correct:0},{q:"Which step translates C++ source code into an executable program? / Langkah manakah menterjemahkan kod sumber C++ menjadi program boleh laksana?",a:["Documentation / Dokumentasi","Compilation / Kompilasi","Printing / Percetakan"],correct:1},{q:"A missing semicolon is usually a... / Titik koma yang tertinggal biasanya merupakan...",a:["Logic error / Ralat logik","Syntax error / Ralat sintaks","Hardware error / Ralat perkakasan"],correct:1}],
[{q:'Which is a valid identifier? / Yang manakah pengecam yang sah?',a:['2score / bermula digit','total_score / menggunakan garis bawah','total score / mengandungi ruang'],correct:1},{q:'Which identifier rule is correct? / Peraturan pengecam yang betul?',a:['Can begin with a digit / Boleh bermula digit','Can contain spaces / Boleh ada ruang','Cannot use reserved keywords / Tidak boleh guna kata kunci terpelihara'],correct:2},{q:'What does const mean? / Apakah maksud const?',a:['Value cannot be reassigned / Nilai tidak boleh ditetapkan semula','Read keyboard input / Baca input','Print a line / Papar baris'],correct:0},{q:'What is 7 % 3? / Berapakah baki 7 % 3?',a:['2','1','3'],correct:1},{q:'What is 7 / 3 when both operands are int? / Berapakah 7 / 3 jika kedua-duanya int?',a:['2','2.33','3'],correct:0},{q:'Which operator compares equality? / Operator untuk membandingkan kesamaan?',a:['=','==','!='],correct:1},{q:'What does && mean? / Apakah maksud &&?',a:['OR / ATAU','NOT / BUKAN','AND / DAN'],correct:2},{q:'What is 5 + 2 * 3? / Berapakah 5 + 2 * 3?',a:['21','11','15'],correct:1},{q:'Which statement reads input? / Pernyataan yang membaca input?',a:['cin >> age;','cout << age;','return age;'],correct:0},{q:'Which statement prints a value? / Pernyataan yang memaparkan nilai?',a:['cin >> total;','cout << total;','int total;'],correct:1}],
[{q:'Which structure executes statements in order? / Struktur manakah melaksanakan arahan mengikut turutan?',a:['Sequence / Jujukan','Selection / Pilihan','Repetition / Ulangan'],correct:0},{q:'Which structure chooses between PASS and FAIL? / Struktur manakah memilih antara PASS dan FAIL?',a:['Sequence / Jujukan','Selection / Pilihan','Repetition / Ulangan'],correct:1},{q:'What is the result of 50 >= 50? / Apakah hasil 50 >= 50?',a:['false / palsu','true / benar','Invalid / Tidak sah'],correct:1},{q:'Which symbol compares equality in C++? / Simbol manakah membandingkan kesamaan dalam C++?',a:['=','==','+='],correct:1},{q:'Which keyword runs when the if condition is false? / Kata kunci manakah dilaksanakan apabila syarat if palsu?',a:['else','for','break'],correct:0},{q:'What is the purpose of break in a switch? / Apakah tujuan break dalam switch?',a:['Repeat the case / Ulang cabang','Exit the switch / Keluar daripada switch','Declare a variable / Isytihar pemboleh ubah'],correct:1},{q:'Which loop is suitable for exactly five repetitions? / Gelung manakah sesuai untuk tepat lima ulangan?',a:['for','switch','if'],correct:0},{q:'How many times does for(int i=1; i<=3; i++) run? / Berapa kali gelung for(int i=1; i<=3; i++) dilaksanakan?',a:['2','3','4'],correct:1},{q:'Which loop executes its body at least once? / Gelung manakah melaksanakan blok sekurang-kurangnya sekali?',a:['while','for','do-while'],correct:2},{q:'What is the sum of 1 to 5? / Berapakah jumlah nombor 1 hingga 5?',a:['10','15','20'],correct:1}],
[{"q": "What is an array? / Apakah tatasusunan?", "a": ["A collection of same-type elements / Koleksi elemen jenis sama", "A single condition / Satu syarat", "A function call / Panggilan fungsi"], "correct": 0},{"q": "What is the first index of a C++ array? / Apakah indeks pertama tatasusunan C++?", "a": ["1", "0", "-1"], "correct": 1},{"q": "How many elements can int a[5] hold? / Berapa elemen boleh disimpan oleh int a[5]?", "a": ["4", "5", "6"], "correct": 1},{"q": "Which expression accesses the third element? / Ungkapan manakah mengakses elemen ketiga?", "a": ["a[3]", "a[2]", "a(2)"], "correct": 1},{"q": "What is a[1] if int a[3]={4,8,12}? / Berapakah a[1]?", "a": ["4", "8", "12"], "correct": 1},{"q": "Which is the last valid index of int x[6]? / Indeks sah terakhir bagi int x[6]?", "a": ["5", "6", "7"], "correct": 0},{"q": "How many iterations does for(int i=0;i<4;i++) make? / Berapa ulangan gelung tersebut?", "a": ["3", "4", "5"], "correct": 1},{"q": "What is the total of {10,20,30}? / Berapakah jumlah {10,20,30}?", "a": ["30", "60", "90"], "correct": 1},{"q": "What is the average of {5,10,15,20}? / Berapakah purata nilai tersebut?", "a": ["10", "12.5", "15"], "correct": 1},{"q": "What is the maximum in {9,4,12,7}? / Nilai tertinggi bagi {9,4,12,7}?", "a": ["9", "12", "7"], "correct": 1}],
[{"q": "What is the purpose of a function? / Apakah tujuan fungsi?", "a": ["Repeat code manually / Mengulang kod secara manual", "Group reusable instructions / Mengumpulkan arahan boleh guna semula", "Declare only arrays / Mengisytiharkan array sahaja"], "correct": 1}, {"q": "Which return type indicates no returned value? / Jenis pulangan manakah bermaksud tiada nilai dipulangkan?", "a": ["void", "int", "double"], "correct": 0}, {"q": "What does int square(int x) return when x is 4 and it returns x*x? / Apakah hasil bagi x=4?", "a": ["8", "16", "4"], "correct": 1}, {"q": "Which line is a valid function prototype? / Baris manakah prototaip fungsi yang sah?", "a": ["int add(int a, int b);", "int add(int a, int b) {", "add(int a, int b);"], "correct": 0}, {"q": "Which expression calls add with arguments 2 and 3? / Ungkapan manakah memanggil add?", "a": ["int add(int,int);", "add(2, 3)", "return add;"], "correct": 1}, {"q": "Where does a typical C++ program begin execution? / Di manakah pelaksanaan program bermula?", "a": ["prototype", "main()", "last function"], "correct": 1}, {"q": "In add(7, 2), what are 7 and 2? / Dalam add(7,2), apakah 7 dan 2?", "a": ["Parameters / Parameter", "Arguments / Argumen", "Return types / Jenis pulangan"], "correct": 1}, {"q": "Which syntax declares a reference parameter? / Sintaks manakah parameter rujukan?", "a": ["int x", "int &x", "int x[]"], "correct": 1}, {"q": "A variable n is initially 5. The function change(int x) sets x to 10. What is the value of n after change(n) is called? / Pemboleh ubah n pada awalnya bernilai 5. Fungsi change(int x) menetapkan x kepada 10. Apakah nilai n selepas arahan change(n) dilaksanakan?", "a": ["5", "10", "0"], "correct": 0}, {"q": "A variable n is initially 5. The function change(int &x) sets x to 10. What is the value of n after change(n) is called? / Pemboleh ubah n pada awalnya bernilai 5. Fungsi change(int &x) menggunakan parameter rujukan dan menetapkan x kepada 10. Apakah nilai n selepas arahan change(n) dilaksanakan?", "a": ["5", "0", "10"], "correct": 2}],
];
let selected=0;const $=id=>document.getElementById(id);const key=i=>'pf-progress-'+i;function completed(i){return localStorage.getItem(key(i))==='1'}

function learningProgress() {
  const total = modules.length;
  const done = modules.filter((m, i) => completed(i)).length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  return `
    <section class="learning-progress" aria-label="Kemajuan pembelajaran">
      <div class="progress-heading">
        <div>
          <h2>📈 Kemajuan Pembelajaran</h2>
          <p>Teruskan pembelajaran anda!</p>
        </div>
        <strong>${done}/${total} Modul</strong>
      </div>
      <div class="progress-track"
           role="progressbar"
           aria-label="Modul yang telah selesai"
           aria-valuemin="0"
           aria-valuemax="100"
           aria-valuenow="${percent}">
        <div class="progress-fill" style="width:${percent}%"></div>
      </div>
      <p class="progress-caption">${percent}% selesai</p>
    </section>
  `;
}

function nav(){ $('nav').innerHTML=modules.map((m,i)=>`<button class="navitem ${i===selected?'active':''}" data-module="${i}"><span>${String(i+1).padStart(2,'0')} · ${m.title}</span><span>${completed(i)?'✓':''}</span></button>`).join('');document.querySelectorAll('[data-module]').forEach(b=>b.onclick=()=>show(+b.dataset.module));}
function home(){selected=-1;nav();$('content').innerHTML=`<div class="hero"><div class="eyebrow">E-LEARNING TVET · C++</div><h1>Programming Fundamentals</h1><p>Belajar asas pengaturcaraan secara berperingkat: penyelesaian masalah, struktur C++, elemen program, kawalan, array dan function.</p><button class="primary" id="start">Mula Belajar →</button></div><h2>Modul Pembelajaran</h2><div class="cards">${modules.map((m,i)=>`<button class="course" data-go="${i}"> <span class="module-icon" aria-hidden="true">${['💡','💻','🧩','🔀','📊','⚙️'][i]}</span><span class="eyebrow">MODUL ${i+1} ${completed(i)?' · ✓ Selesai':''}</span><strong>${m.title}</strong><small>${m.topics.length} subtopik · Nota & kuiz</small><span class="arrow">Buka modul →</span></button>`).join('')}</div>`;$('start').onclick=()=>show(0);document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>show(+b.dataset.go));$('content').insertAdjacentHTML('beforeend',`<section class="task" style="margin-top:24px"><h2>Final Assessment / Penilaian Akhir</h2><p>30 bilingual questions across Modules 1–6 / 30 soalan dwibahasa merangkumi Modul 1–6.</p>
<p><b>Formative Assessment / Penilaian Formatif:</b>
This assessment is for learning and self-evaluation purposes only.
Penilaian ini adalah untuk tujuan pembelajaran dan penilaian kendiri sahaja.</p>
<p><b>Passing Score / Markah Lulus:</b> 18/30 (60%).
Only the first submission for each student ID will be officially recorded.
Hanya penghantaran pertama bagi setiap nombor matrik akan direkodkan.</p>
<button class="primary" id="openFinal">Start Final Assessment / Mula Penilaian Akhir →</button></section>`);$('openFinal').onclick=showFinalAssessment;$('content').insertAdjacentHTML('beforeend',`
<section id="studentRecordsSection" class="task" style="margin-top:20px;display:none">
<h2>Student Achievement Records / Rekod Pencapaian Pelajar</h2><p>View saved records and export to Excel-compatible CSV. / Lihat rekod yang disimpan dan eksport CSV untuk Excel.</p><button class="secondary" id="openRecords">View Records / Lihat Rekod →</button></section>`);$('openRecords').onclick=showStudentRecords;}
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
function show(i){selected=i;nav();let m=modules[i];$('content').innerHTML=`<div class="eyebrow">MODUL ${i+1} / ${modules.length}</div><h1>${m.title}</h1><p class="intro">Baca nota setiap subtopik, cuba contoh yang diberikan dan jawab kuiz untuk menguji pemahaman.</p><div class="topics">${m.topics.map((t,j)=>`<article class="topic"><h2>${t[0]} ${t[1]}</h2><p>${t[2]}</p><pre><code>${escapeHtml(t[3])}</code></pre>${([richModule1,richModule2,richModule3,richModule4,richModule5,richModule6][i]||[])[j]||''}</article>`).join('')}</div><section class="quiz"><h2>Kuiz Modul ${i+1}</h2><p>Answer all ${questions[i].length} questions. Your score is stored only in this browser. / Jawab semua ${questions[i].length} soalan. Markah disimpan dalam pelayar ini sahaja.</p><div id="quizbody"></div></section>${[practicalModule1,practicalModule2,practicalModule3,practicalModule4,practicalModule5,practicalModule6][i]||''}<div class="next"><button class="secondary" id="back">← Dashboard</button>${i<5?'<button class="primary" id="next">Modul seterusnya →</button>':''}</div>`;$('back').onclick=home;if(i<5)$('next').onclick=()=>show(i+1);renderQuiz(i);window.scrollTo(0,0);}
function escapeHtml(s){return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;')}
const quizExplanations=[
['Program design prepares the algorithm, pseudocode or flowchart before coding. / Reka bentuk program dibuat sebelum pengekodan.','Testing checks actual output against expected results. / Pengujian membandingkan output sebenar dengan hasil dijangka.','IPO means Input, Process, Output. / IPO ialah Input, Proses dan Output.','Length and width are input values; area is the output. / Panjang dan lebar ialah input.','Rectangle area is length × width; 2 × (length + width) is perimeter. / Luas ialah panjang × lebar.','An algorithm must have clear steps and finish. / Algoritma mesti jelas dan mempunyai titik tamat.','A diamond represents a decision with branches such as Yes/No. / Diamond mewakili keputusan.','A parallelogram represents input/output. / Bentuk parallelogram mewakili input/output.','IF ... ELSE selects between alternatives. / IF ... ELSE memilih antara dua tindakan.','(60 + 75 + 90) / 3 = 75. / Purata tiga markah ialah 75.'],
 ['main() is where program execution begins. / Pelaksanaan program bermula pada main().','#include <iostream> enables cin and cout. / Header iostream menyediakan cin dan cout.','cout displays output; cin reads input. / cout memaparkan output dan cin menerima input.','return 0; signals that main completed successfully. / return 0 menandakan program tamat dengan jayanya.','Identifiers cannot start with digits or contain spaces. / Nama pemboleh ubah tidak boleh bermula nombor atau mempunyai ruang.','int is for whole numbers. / int menyimpan nombor bulat.','double is suitable for decimal values. / double sesuai untuk nombor perpuluhan.','C++ source code commonly uses the .cpp extension. / Fail sumber C++ lazimnya berakhir dengan .cpp.','Compilation translates source code into an executable program. / Kompilasi menterjemahkan kod sumber.','A missing semicolon violates C++ syntax. / Titik koma yang tertinggal ialah ralat sintaks.'],
 ['Identifiers may use underscores but cannot begin with digits or contain spaces. / Pengecam boleh menggunakan garis bawah tetapi tidak boleh bermula dengan digit atau mengandungi ruang.','Reserved C++ keywords cannot be used as identifiers. / Kata kunci C++ tidak boleh digunakan sebagai pengecam.','const prevents reassignment after initialization. / const menghalang penetapan semula nilai selepas pengawalan.','The remainder when 7 is divided by 3 is 1. / Baki bahagi 7 dengan 3 ialah 1.','Integer division discards the fractional part: 7 / 3 = 2. / Pembahagian integer membuang bahagian perpuluhan.','== compares values; = assigns a value. / == membandingkan nilai, manakala = menetapkan nilai.','&& is logical AND: both conditions must be true. / && ialah DAN: kedua-dua syarat mesti benar.','Multiplication takes precedence: 5 + (2 × 3) = 11. / Darab dilakukan dahulu, jadi jawapannya 11.','cin >> reads keyboard input. / cin >> membaca input papan kekunci.','cout << displays output. / cout << memaparkan output.'],
 ['Sequence executes statements in order. / Jujukan melaksanakan arahan mengikut turutan.','Selection chooses a branch based on a condition. / Pilihan memilih cabang berdasarkan syarat.','The comparison 50 >= 50 is true because equality is included. / Perbandingan 50 >= 50 adalah benar kerana nilai sama termasuk dalam syarat.','== compares equality, whereas = assigns a value. / == membandingkan kesamaan, manakala = menetapkan nilai.','else runs when the preceding if condition is false. / else dilaksanakan apabila syarat if sebelumnya palsu.','break exits the switch and prevents unintended fall-through. / break keluar daripada switch dan mengelakkan cabang seterusnya dilaksanakan tanpa sengaja.','for is convenient when the number of iterations is known. / for sesuai apabila bilangan ulangan diketahui.','The counter takes values 1, 2 and 3, so the loop runs three times. / Pembilang bernilai 1, 2 dan 3, maka gelung berjalan tiga kali.','do-while checks its condition after the body, so it runs at least once. / do-while menyemak syarat selepas blok, jadi berjalan sekurang-kurangnya sekali.','1 + 2 + 3 + 4 + 5 = 15. / Jumlah nombor 1 hingga 5 ialah 15.'],
 ["An array groups multiple elements of one type under one name. / Array mengumpulkan elemen jenis sama di bawah satu nama.", "C++ array indices begin at 0. / Indeks tatasusunan C++ bermula pada 0.", "The declared size 5 provides five elements. / Saiz 5 menyediakan lima elemen.", "The third element has index 2 because indexing begins at 0. / Elemen ketiga berindeks 2 kerana indeks bermula 0.", "a[1] is the second element, which is 8. / a[1] ialah elemen kedua bernilai 8.", "For six elements, valid indices are 0 to 5. / Bagi enam elemen, indeks sah ialah 0 hingga 5.", "The counter takes values 0, 1, 2, 3, so four iterations occur. / Pembilang mengambil nilai 0 hingga 3, iaitu empat ulangan.", "10 + 20 + 30 = 60. / Jumlah ialah 60.", "(5 + 10 + 15 + 20) / 4 = 12.5. / Purata ialah 12.5.", "The highest element among 9, 4, 12 and 7 is 12. / Nilai tertinggi ialah 12."],
["Functions group instructions for reuse and clarity. / Fungsi mengumpulkan arahan untuk guna semula dan memudahkan pemahaman.", "void means the function does not return a value. / void bermaksud fungsi tidak memulangkan nilai.", "4 × 4 = 16. / Empat darab empat ialah 16.", "A prototype declares return type, name and parameters and ends with a semicolon. / Prototaip mengandungi jenis pulangan, nama, parameter dan titik koma.", "add(2,3) is a function call with two arguments. / add(2,3) ialah panggilan fungsi dengan dua argumen.", "main() is the usual program entry point. / main() ialah titik permulaan program.", "Values supplied in a call are arguments; names in the definition are parameters. / Nilai dalam panggilan ialah argumen; nama dalam definisi ialah parameter.", "The ampersand & marks a reference parameter. / Simbol & menandakan parameter rujukan.", "Pass by value passes a copy of n into x. Changing x to 10 does not change the original n, so n remains 5. / Penghantaran secara nilai menyalin nilai n ke dalam parameter x. Perubahan x kepada 10 tidak mengubah pemboleh ubah asal n. Oleh itu, n kekal bernilai 5.", "Pass by reference allows x to refer to the original variable n. Changing x to 10 also changes n, so n becomes 10. / Penghantaran secara rujukan membolehkan parameter x merujuk kepada pemboleh ubah asal n. Apabila x ditetapkan kepada 10, nilai n turut berubah menjadi 10."]
];
function renderQuiz(i){
 const body=$('quizbody');
 body.innerHTML=`<form id="quizform">${questions[i].map((q,j)=>`<fieldset><legend>${j+1}. ${escapeHtml(q.q)}</legend>${q.a.map((a,k)=>`<label class="answer"><input required type="radio" name="q${j}" value="${k}"> ${escapeHtml(a)}</label>`).join('')}</fieldset>`).join('')}<button class="primary" type="submit">Semak Markah / Check Score</button></form><div id="result" role="status" aria-live="polite"></div>`;
 $('quizform').onsubmit=e=>{
  e.preventDefault();
  const data=new FormData(e.target),wrong=[];
  let score=0;
  questions[i].forEach((q,j)=>{
   const chosen=Number(data.get('q'+j));
   if(chosen===q.correct){score++;return;}
   wrong.push({number:j+1,question:q.q,chosen:q.a[chosen]??'Tidak dijawab',correct:q.a[q.correct],explanation:(quizExplanations[i]||[])[j]||'Semak nota berkaitan soalan ini. / Review the related topic notes.'});
  });
  localStorage.setItem('pf-score-'+i,String(score));
  localStorage.setItem(key(i),'1');
  const percent=Math.round(score/questions[i].length*100);
  $('result').innerHTML=`<div style="margin-top:20px;padding:18px;border:1px solid #cbd5e1;border-radius:12px;background:#f8fafc;color:#0f172a">
   <h3 style="margin-top:0">Keputusan Kuiz / Quiz Results</h3>
   <p><strong>Markah: ${score}/${questions[i].length} (${percent}%)</strong></p>
   ${wrong.length?`<p>Anda tersilap pada ${wrong.length} soalan. / Review these ${wrong.length} incorrect answers:</p>${wrong.map(w=>`<div style="margin:12px 0;padding:14px;border-left:4px solid #dc2626;background:#fff;border-radius:6px"><strong>Question / Soalan ${w.number}: ${escapeHtml(w.question)}</strong><p>❌ Jawapan anda / Your answer: ${escapeHtml(w.chosen)}</p><p>✅ Jawapan betul / Correct answer: <strong>${escapeHtml(w.correct)}</strong></p><p>💡 ${escapeHtml(w.explanation)}</p></div>`).join('')}`:'<p>🎉 Syabas! Semua jawapan betul. / Excellent! All answers are correct.</p>'}
   <button type="button" class="secondary" id="retryQuiz" style="margin-top:10px">Cuba Lagi / Try Again</button>
  </div>`;
  $('retryQuiz').onclick=()=>{renderQuiz(i);document.querySelector('.quiz').scrollIntoView({behavior:'smooth',block:'start'});};
  nav();
  $('result').scrollIntoView({behavior:'smooth',block:'nearest'});
 };
}

// FINAL ASSESSMENT / PENILAIAN AKHIR — 30 bilingual questions (5 per module).
const finalAssessmentQuestions = [
  {
    "module": 1,
    "q": "Which PLC phase identifies input, process and output? / Fasa PLC manakah mengenal pasti input, proses dan output?",
    "a": [
      "Analysis / Analisis",
      "Coding / Pengekodan",
      "Maintenance / Penyelenggaraan",
      "Documentation / Dokumentasi"
    ],
    "correct": 0,
    "explanation": "Problem analysis identifies IPO. / Analisis masalah mengenal pasti input, proses dan output."
  },
  {
    "module": 1,
    "q": "What is the output of an IPO model? / Apakah maksud output dalam model IPO?",
    "a": [
      "Data entered / Data dimasukkan",
      "Result produced / Hasil yang dikeluarkan",
      "Formula / Rumus",
      "Compiler / Pengkompil"
    ],
    "correct": 1,
    "explanation": "Output is the result after processing. / Output ialah hasil selepas pemprosesan."
  },
  {
    "module": 1,
    "q": "Which flowchart symbol represents a decision? / Simbol carta alir manakah mewakili keputusan?",
    "a": [
      "Oval / Bujur",
      "Rectangle / Segi empat tepat",
      "Diamond / Bentuk berlian",
      "Parallelogram / Segi empat selari"
    ],
    "correct": 2,
    "explanation": "A diamond is used for decisions such as Yes/No. / Bentuk berlian digunakan untuk keputusan seperti Ya/Tidak."
  },
  {
    "module": 1,
    "q": "Which pseudocode statement repeats instructions? / Pernyataan pseudokod manakah mengulang arahan?",
    "a": [
      "OUTPUT",
      "INPUT",
      "END",
      "WHILE ... DO"
    ],
    "correct": 3,
    "explanation": "WHILE repeats steps while a condition is true. / WHILE mengulangi arahan selagi syarat benar."
  },
  {
    "module": 1,
    "q": "What is the average of 60, 75 and 90? / Berapakah purata bagi 60, 75 dan 90?",
    "a": [
      "75",
      "70",
      "80",
      "225"
    ],
    "correct": 0,
    "explanation": "(60 + 75 + 90) / 3 = 75. / Jumlah 225 dibahagi 3 menghasilkan 75."
  },
  {
    "module": 2,
    "q": "Which function starts a C++ program? / Fungsi manakah memulakan pelaksanaan program C++?",
    "a": [
      "start()",
      "main()",
      "begin()",
      "run()"
    ],
    "correct": 1,
    "explanation": "Program execution begins in main(). / Pelaksanaan program bermula dalam main()."
  },
  {
    "module": 2,
    "q": "Which header supports cout and cin? / Fail pengepala manakah menyediakan cout dan cin?",
    "a": [
      "<cmath>",
      "<string>",
      "<iostream>",
      "<vector>"
    ],
    "correct": 2,
    "explanation": "iostream provides standard input/output. / iostream menyediakan kemudahan input dan output piawai."
  },
  {
    "module": 2,
    "q": "Which statement displays text? / Pernyataan manakah memaparkan teks?",
    "a": [
      "cout << \"Hello\";",
      "cin >> name;",
      "int age;",
      "return 0;"
    ],
    "correct": 0,
    "explanation": "cout displays output. / cout digunakan untuk memaparkan output."
  },
  {
    "module": 2,
    "q": "Which type stores a decimal value? / Jenis data manakah menyimpan nilai perpuluhan?",
    "a": [
      "int",
      "char",
      "bool",
      "double"
    ],
    "correct": 3,
    "explanation": "double can store decimal values. / double boleh menyimpan nilai perpuluhan."
  },
  {
    "module": 2,
    "q": "A missing semicolon is usually what error? / Titik koma yang tertinggal biasanya menyebabkan ralat apa?",
    "a": [
      "Logic error / Ralat logik",
      "Syntax error / Ralat sintaks",
      "Network error / Ralat rangkaian",
      "Input value / Nilai input"
    ],
    "correct": 1,
    "explanation": "A missing semicolon breaks C++ syntax. / Titik koma yang tertinggal melanggar peraturan sintaks C++."
  },
  {
    "module": 3,
    "q": "Which is a valid C++ identifier? / Yang manakah pengecam C++ yang sah?",
    "a": [
      "2marks",
      "total marks",
      "total_marks",
      "int"
    ],
    "correct": 2,
    "explanation": "Identifiers cannot start with digits, contain spaces or use reserved words. / Pengecam tidak boleh bermula dengan digit, mengandungi ruang atau menggunakan kata kunci terpelihara."
  },
  {
    "module": 3,
    "q": "What is the result of integer division 7 / 3? / Apakah hasil pembahagian integer 7 / 3?",
    "a": [
      "2",
      "2.33",
      "3",
      "1"
    ],
    "correct": 0,
    "explanation": "Integer division discards the fractional part. / Pembahagian integer mengabaikan bahagian perpuluhan."
  },
  {
    "module": 3,
    "q": "Which operator checks equality? / Operator manakah membandingkan kesamaan?",
    "a": [
      "=",
      "!=",
      ">=",
      "=="
    ],
    "correct": 3,
    "explanation": "== compares equality; = assigns a value. / == membandingkan kesamaan; = memberikan nilai."
  },
  {
    "module": 3,
    "q": "Which statement reads an integer into age? / Pernyataan manakah membaca integer ke dalam age?",
    "a": [
      "cout << age;",
      "cin >> age;",
      "age << cin;",
      "print(age);"
    ],
    "correct": 1,
    "explanation": "cin >> age reads input into age. / cin >> age menerima input dan menyimpannya dalam age."
  },
  {
    "module": 3,
    "q": "What is the value of 5 + 2 * 3? / Berapakah nilai 5 + 2 * 3?",
    "a": [
      "21",
      "15",
      "11",
      "10"
    ],
    "correct": 2,
    "explanation": "Multiplication happens before addition: 5 + 6 = 11. / Darab dilakukan sebelum tambah: 5 + 6 = 11."
  },
  {
    "module": 4,
    "q": "Which structure chooses between PASS and FAIL? / Struktur manakah memilih antara LULUS dan GAGAL?",
    "a": [
      "Selection / Pilihan",
      "Sequence / Jujukan",
      "Array / Tatasusunan",
      "Function / Fungsi"
    ],
    "correct": 0,
    "explanation": "Selection chooses based on a condition. / Struktur pilihan menentukan tindakan berdasarkan syarat."
  },
  {
    "module": 4,
    "q": "What does if (mark >= 50) test? / Apakah yang diuji oleh if (mark >= 50)?",
    "a": [
      "Mark below 50 / Markah kurang 50",
      "Mark equal to 0 / Markah sama dengan 0",
      "Mark above 100 / Markah melebihi 100",
      "Mark at least 50 / Markah sekurang-kurangnya 50"
    ],
    "correct": 3,
    "explanation": ">= means greater than or equal to. / >= bermaksud lebih besar atau sama dengan."
  },
  {
    "module": 4,
    "q": "Which loop runs its body at least once? / Gelung manakah melaksanakan blok arahannya sekurang-kurangnya sekali?",
    "a": [
      "for",
      "do-while",
      "while",
      "if"
    ],
    "correct": 1,
    "explanation": "do-while checks the condition after executing its body. / do-while menyemak syarat selepas melaksanakan blok arahan."
  },
  {
    "module": 4,
    "q": "How many iterations occur in for(int i=0; i<3; i++)? / Berapa kali gelung for(int i=0; i<3; i++) berulang?",
    "a": [
      "2",
      "4",
      "3",
      "0"
    ],
    "correct": 2,
    "explanation": "i takes values 0, 1 and 2: three iterations. / i bernilai 0, 1 dan 2: tiga ulangan."
  },
  {
    "module": 4,
    "q": "If x=5, what is x after x++? / Jika x=5, apakah nilai x selepas x++?",
    "a": [
      "6",
      "4",
      "5",
      "10"
    ],
    "correct": 0,
    "explanation": "x++ increments x by one. / x++ menambah nilai x sebanyak satu."
  },
  {
    "module": 5,
    "q": "What is the first index of a C++ array? / Apakah indeks pertama tatasusunan C++?",
    "a": [
      "1",
      "0",
      "-1",
      "2"
    ],
    "correct": 1,
    "explanation": "C++ array indexing starts at 0. / Indeks tatasusunan C++ bermula pada 0."
  },
  {
    "module": 5,
    "q": "How many elements can int marks[5] store? / Berapa elemen boleh disimpan dalam int marks[5]?",
    "a": [
      "4",
      "6",
      "5",
      "0"
    ],
    "correct": 2,
    "explanation": "The array has five elements, indexed 0 to 4. / Tatasusunan mempunyai lima elemen, berindeks 0 hingga 4."
  },
  {
    "module": 5,
    "q": "Given int a[3]={4,7,9}; what is a[1]? / Diberi int a[3]={4,7,9}; apakah nilai a[1]?",
    "a": [
      "4",
      "9",
      "3",
      "7"
    ],
    "correct": 3,
    "explanation": "a[1] is the second element, 7. / a[1] ialah elemen kedua, iaitu 7."
  },
  {
    "module": 5,
    "q": "Which loop visits every element of int a[4]? / Gelung manakah mengakses semua elemen int a[4]?",
    "a": [
      "for(int i=0;i<4;i++)",
      "for(int i=1;i<=4;i++)",
      "for(int i=0;i<=4;i++)",
      "for(int i=4;i>0;i++)"
    ],
    "correct": 0,
    "explanation": "Valid indices are 0, 1, 2 and 3. / Indeks yang sah ialah 0, 1, 2 dan 3."
  },
  {
    "module": 5,
    "q": "Which index is invalid for int a[3]? / Indeks manakah tidak sah bagi int a[3]?",
    "a": [
      "0",
      "3",
      "1",
      "2"
    ],
    "correct": 1,
    "explanation": "Valid indices are 0 to 2; index 3 is out of bounds. / Indeks sah ialah 0 hingga 2; indeks 3 di luar julat."
  },
  {
    "module": 6,
    "q": "What is the purpose of a function? / Apakah tujuan fungsi dalam C++?",
    "a": [
      "Store only arrays / Menyimpan tatasusunan sahaja",
      "Replace all loops / Menggantikan semua gelung",
      "Group reusable instructions / Mengumpulkan arahan yang boleh digunakan semula",
      "Start hardware / Memulakan perkakasan"
    ],
    "correct": 2,
    "explanation": "Functions organise reusable instructions. / Fungsi menyusun arahan supaya boleh digunakan semula."
  },
  {
    "module": 6,
    "q": "Which is a valid function prototype? / Yang manakah prototaip fungsi yang sah?",
    "a": [
      "int add(int a, int b);",
      "add(int a, int b)",
      "int add = (a,b);",
      "return add;"
    ],
    "correct": 0,
    "explanation": "A prototype states return type, name, parameters and ends with a semicolon. / Prototaip menyatakan jenis pulangan, nama dan parameter serta diakhiri titik koma."
  },
  {
    "module": 6,
    "q": "What does void mean in a function declaration? / Apakah maksud void dalam pengisytiharan fungsi?",
    "a": [
      "Returns an integer / Memulangkan integer",
      "Always takes no parameters / Sentiasa tiada parameter",
      "Cannot be called / Tidak boleh dipanggil",
      "Returns no value / Tidak memulangkan nilai"
    ],
    "correct": 3,
    "explanation": "void means the function returns no value. / void bermaksud fungsi tidak memulangkan nilai."
  },
  {
    "module": 6,
    "q": "If n=5 and change(int x) sets x=10, what is n after change(n)? / Jika n=5 dan change(int x) menetapkan x=10, apakah nilai n selepas change(n)?",
    "a": [
      "10",
      "5",
      "0",
      "15"
    ],
    "correct": 1,
    "explanation": "Pass by value changes only the local copy x; n remains 5. / Penghantaran secara nilai hanya mengubah salinan setempat x; n kekal 5."
  },
  {
    "module": 6,
    "q": "If n=5 and change(int &x) sets x=10, what is n after change(n)? / Jika n=5 dan change(int &x) menetapkan x=10, apakah nilai n selepas change(n)?",
    "a": [
      "5",
      "0",
      "10",
      "15"
    ],
    "correct": 2,
    "explanation": "Pass by reference lets x refer to n, so n becomes 10. / Penghantaran secara rujukan membolehkan x merujuk kepada n, maka n menjadi 10."
  }
];
// CONFIGURATION: Replace with your own Google Apps Script /exec URL.
// WARNING: A public endpoint cannot verify that a score is genuine.
const TVET_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwJBmWaYWRVd9MXeJJqESC5qw6AF_YAztLAeFQV78LDPSGUO4TWE8-n5kHP0aLwx9Enkg/exec';


const TVET_COLLEGE_CONFIG = {
  KKKEMAMAN: {
    name: 'Kolej Komuniti Kemaman',
    url: TVET_SHEETS_WEB_APP_URL
 
  }
};


function getSelectedCollege() {
  const params = new URLSearchParams(window.location.search);
  const collegeCode = (params.get('kolej') || '').trim().toUpperCase();

  if (!collegeCode) return null;

  const college = TVET_COLLEGE_CONFIG[collegeCode];
  if (!college) return null;

  return {
    code: collegeCode,
    name: college.name,
    url: college.url
  };
}


function saveAssessmentLocally(record){
  try {
    const rows=readStudentRecords();
    const pos=rows.findIndex(r=>r.studentId.toLowerCase()===record.studentId.toLowerCase());
    if(pos>=0)rows[pos]=record;else rows.push(record);
    localStorage.setItem('pf-student-records-v1',JSON.stringify(rows));
    return true;
  }catch(e){return false;}
}

async function sendAssessmentToSheets(record, statusEl){
  const college = getSelectedCollege();

  if (!college) {
    statusEl.textContent =
      'Kod kolej tiada atau tidak sah. Keputusan tidak dihantar ke Google Sheets. / Missing or invalid college code. Result not sent.';
    return;
  }

  const url = college.url;

  if(!/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(url)){
    statusEl.textContent='Google Sheets belum disambungkan. Keputusan hanya disimpan pada peranti ini. / Google Sheets not configured.';
    return;
  }
  const key='pf-sheet-sent-'+record.studentId.toLowerCase()+'-'+record.attemptId;
  if(localStorage.getItem(key)==='1')return;
  statusEl.textContent='Menghantar keputusan ke Google Sheets... / Sending result...';
  try{
    // no-cors is necessary for browser -> Apps Script; its response cannot be read.
    // Thus this indicates a request attempt, NOT verified receipt by Google Sheets.
    await fetch(url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({nama:record.name,matrik:record.studentId,jawapan:record.answers})});
    localStorage.setItem(key,'1');
    statusEl.textContent='Penghantaran dicuba. Rekod rasmi ialah cubaan pertama dalam Google Sheets. Sila sahkan dengan pensyarah; pelayar tidak boleh mengesahkan penerimaan. / Submission attempted; verify official record with lecturer.';
  }catch(err){
    statusEl.textContent='Penghantaran mungkin gagal. Rekod masih disimpan pada peranti ini. / Send may have failed; local record retained.';
  }
}
function showFinalAssessment(){
  selected=-2;nav();
  const saved=localStorage.getItem('pf-final-score');
  $('content').innerHTML=`<div class="eyebrow">FINAL ASSESSMENT / PENILAIAN AKHIR</div><h1>Penilaian Akhir / Final Assessment</h1><p>30 multiple-choice questions: 5 questions from each of the 6 modules. / 30 soalan objektif: 5 soalan daripada setiap 6 modul.</p><p><b>Passing mark / Markah lulus: 60% (18/30).</b> Results are saved locally and submitted to Google Sheets when configured. / Keputusan disimpan pada peranti dan dihantar ke Google Sheets jika sambungan telah ditetapkan.</p>${saved!==null?`<p>Previous score / Markah terdahulu: <b>${escapeHtml(saved)}/30</b></p>`:''}<section class="quiz"><form id="finalForm"><fieldset><legend><b>Student Information / Maklumat Pelajar</b></legend><p>Keputusan akan dihantar secara automatik ke Google Sheets pensyarah selepas penilaian dihantar (jika sambungan telah ditetapkan). / Your result will be sent to the lecturer's Google Sheet after submission (if configured).</p><label for="assessmentStudentId">No. Matrik / Student ID</label><input id="assessmentStudentId" name="assessmentStudentId" required maxlength="30" pattern="[a-zA-Z0-9_/-]{2,30}" autocomplete="off" placeholder="Contoh: KKCK2026001" style="display:block;padding:12px;margin:8px 0 12px;width:100%;max-width:450px"><label for="assessmentStudentName">Nama Penuh / Full Name</label><input id="assessmentStudentName" name="assessmentStudentName" required maxlength="100" autocomplete="name" placeholder="Contoh: Nur Aina Binti Ahmad" style="display:block;padding:12px;margin:8px 0 12px;width:100%;max-width:450px"></fieldset>${finalAssessmentQuestions.map((q,i)=>`<fieldset><legend>${i+1}. <small>Modul ${q.module}</small> — ${escapeHtml(q.q)}</legend>${q.a.map((a,j)=>`<label class="answer"><input type="radio" name="finalq${i}" value="${j}" required> ${String.fromCharCode(65+j)}. ${escapeHtml(a)}</label>`).join('')}</fieldset>`).join('')}<button type="submit" class="primary">Submit Assessment / Hantar Penilaian</button></form><div id="finalResult" aria-live="polite"></div></section><div class="next"><button class="secondary" id="finalBack">← Dashboard</button></div>`;
  $('finalBack').onclick=home;
  $('finalForm').onsubmit=(event)=>{
    event.preventDefault();
    const form=new FormData(event.target);
    const details=finalAssessmentQuestions.map((q,i)=>({q,index:i,chosen:Number(form.get('finalq'+i))}));
    const studentId=String(form.get('assessmentStudentId')||'').trim();
    const studentName=String(form.get('assessmentStudentName')||'').trim().replace(/\s+/g,' ');
    if(!/^[a-zA-Z0-9_\/-]{2,30}$/.test(studentId)||!studentName){alert('Sila isi nombor matrik dan nama penuh. / Enter student ID and name.');return;}
    const score=details.filter(x=>x.chosen===x.q.correct).length;
    const percent=Math.round(score/30*100);
    const pass=score>=18;
    localStorage.setItem('pf-final-score',String(score));
    const record={studentId,name:studentName,answers:details.map(x=>x.chosen),score,percent,status:pass?'PASS / LULUS':'FAIL / GAGAL',date:new Date().toISOString().slice(0,10),attemptId:String(Date.now())};
    const localSaved=saveAssessmentLocally(record);
    const detailHtml=details.map(({q,index,chosen})=>`<article class="task" style="margin:12px 0"><b>${index+1}. Modul ${q.module} — ${chosen===q.correct?'✓ Correct / Betul':'✗ Incorrect / Salah'}</b><p>${escapeHtml(q.q)}</p><p><b>Your answer / Jawapan anda:</b> ${escapeHtml(q.a[chosen])}</p><p><b>Correct answer / Jawapan betul:</b> ${escapeHtml(q.a[q.correct])}</p><p><b>Explanation / Penerangan:</b> ${escapeHtml(q.explanation)}</p></article>`).join('');
    $('finalResult').innerHTML=`<div class="note" style="margin-top:20px"><h2>Results / Keputusan (Semakan Tempatan, Belum Disahkan) </h2><p><strong>${score}/30 (${percent}%) — ${pass?'PASS / LULUS':'FAIL / GAGAL'}</strong></p><p>Passing requirement: 18/30 (60%). / Syarat lulus: 18/30 (60%).</p><button type="button" class="secondary" id="retryFinal">Try Again / Cuba Lagi</button><h3>Answer Review / Semakan Jawapan</h3>${detailHtml}</div>`;
    $('retryFinal').onclick=showFinalAssessment;
    const statusEl=document.createElement('p');statusEl.setAttribute('role','status');statusEl.style.fontWeight='bold';
    statusEl.textContent=localSaved?'Keputusan disimpan pada peranti ini. / Saved locally.':'Simpanan pada peranti gagal. / Local save failed.';
    $('finalResult').prepend(statusEl);
    sendAssessmentToSheets(record,statusEl);
    if(pass){
      const certArea=document.createElement('section');
      certArea.className='task';
      certArea.style.marginTop='18px';
      certArea.innerHTML=`<h3>Digital Certificate / Sijil Pencapaian Digital</h3><p>Enter your details exactly as they should appear on the certificate. / Masukkan maklumat seperti yang ingin dipaparkan pada sijil.</p><label for="certificateStudentId"><b>Student ID / No. Matrik Pelajar (untuk rekod)</b></label><input id="certificateStudentId" type="text" maxlength="30" autocomplete="off" placeholder="Contoh: KKCK2026001" style="display:block;width:100%;max-width:450px;padding:12px;margin:8px 0 12px;border:1px solid #aaa;border-radius:8px"><label for="certificateName"><b>Full Name / Nama Penuh</b></label><input id="certificateName" type="text" maxlength="100" autocomplete="name" placeholder="Contoh: Nur Aina Binti Ahmad" style="display:block;width:100%;max-width:450px;padding:12px;margin:8px 0 12px;border:1px solid #aaa;border-radius:8px"><label for="certificateIC"><b>Identity Card Number / No. Kad Pengenalan</b></label><input id="certificateIC" type="text" inputmode="numeric" maxlength="14" autocomplete="off" placeholder="000000-00-0000" aria-describedby="icHelp" style="display:block;width:100%;max-width:450px;padding:12px;margin:8px 0 6px;border:1px solid #aaa;border-radius:8px"><p id="icHelp" style="font-size:.85em">12 digits, with or without hyphens. / 12 digit, dengan atau tanpa sengkang. The IC is used only to print the certificate and is not saved. / IC hanya digunakan untuk cetakan sijil dan tidak disimpan.</p><button type="button" class="secondary" id="saveStudentRecord" hidden>Save Result / Simpan Keputusan</button> <button type="button" class="primary" id="printCertificate">Preview &amp; Print Certificate / Pratonton &amp; Cetak Sijil</button><p style="font-size:0.85em">Self-generated learning certificate based on local result, not a verified official first-attempt result. / Sijil pembelajaran berdasarkan markah tempatan, bukan keputusan rasmi cubaan pertama.</p>`;
      $('finalResult').appendChild(certArea);
      $('certificateStudentId').value=studentId;
      $('certificateName').value=studentName;
      $('saveStudentRecord').onclick=()=>{
        const studentId=$('certificateStudentId').value.trim();
        const name=$('certificateName').value.trim().replace(/\s+/g,' ');
        if(!studentId||!name){alert('Please enter student ID and full name. / Sila isi nombor matrik dan nama penuh.');return;}
        if(!/^[a-zA-Z0-9_\/-]{2,30}$/.test(studentId)){alert('Use letters, digits, dash or slash for student ID. / Gunakan huruf, nombor, sengkang atau garis miring bagi nombor matrik.');return;}
        const records=readStudentRecords();
        const record={studentId,name,score,percent,status:pass?'PASS / LULUS':'FAIL / GAGAL',date:new Date().toISOString().slice(0,10)};
        const existing=records.findIndex(r=>r.studentId.toLowerCase()===studentId.toLowerCase());
        if(existing>=0){if(!confirm('Replace existing result for this student? / Gantikan keputusan sedia ada bagi pelajar ini?'))return;records[existing]=record;}
        else records.push(record);
        try{localStorage.setItem('pf-student-records-v1',JSON.stringify(records));alert('Result saved in this browser. / Keputusan disimpan dalam pelayar ini.');}
        catch(e){alert('Unable to save. Browser storage may be full or disabled. / Tidak dapat menyimpan rekod.');}
      };
      $('printCertificate').onclick=()=>{
        const name=$('certificateName').value.trim().replace(/\s+/g,' ');
        const icDigits=$('certificateIC').value.replace(/[\s-]/g,'');
        if(!name){alert('Please enter your full name. / Sila masukkan nama penuh.');$('certificateName').focus();return;}
        if(!/^\d{12}$/.test(icDigits)){alert('Enter a valid 12-digit IC format. / Masukkan format IC 12 digit yang betul.');$('certificateIC').focus();return;}
        const safeName=escapeHtml(name);
        const safeIC=escapeHtml(icDigits.slice(0,6)+'-'+icDigits.slice(6,8)+'-'+icDigits.slice(8));
        const date=new Date().toLocaleDateString('ms-MY',{day:'numeric',month:'long',year:'numeric'});
        const popup=window.open('','_blank');
        if(!popup){alert('Please allow pop-ups for this site. / Sila benarkan tetingkap pop-up untuk laman ini.');return;}
        popup.document.open();
        popup.document.write(`<!doctype html><html lang="ms"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Digital Certificate / Sijil Pencapaian</title><style>
@page{size:A4 landscape;margin:0}*{box-sizing:border-box}body{margin:0;background:#e8edf4;color:#203551;font-family:Georgia,'Times New Roman',serif}.toolbar{background:#fff;padding:12px;text-align:center;font:15px Arial,sans-serif}.toolbar button{padding:11px 20px;border:0;border-radius:6px;background:#163c67;color:white;font-weight:bold;cursor:pointer}.sheet{width:277mm;height:190mm;margin:12px auto;background:#fff;padding:8mm;box-shadow:0 4px 24px #0002}.frame{height:100%;border:3mm double #183d65;padding:4mm}.inner{height:100%;border:1.4mm solid #b89649;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:5mm 10mm}.ornament{color:#ad8737;font-size:22px;letter-spacing:9px}.eyebrow{font:700 12px Arial,sans-serif;letter-spacing:2.4px;color:#8a6a2b;margin:5mm 0 2mm}.title{font-size:35px;margin:1mm 0;color:#15395f}.sub{font-size:21px;margin:0 0 5mm;color:#9b752d}.lead{font-size:15px;margin:2mm 0}.name{font-size:29px;font-weight:bold;line-height:1.15;max-width:100%;overflow-wrap:anywhere;border-bottom:1px solid #b89649;padding:2mm 7mm 3mm;margin:3mm 0}.ic{font:14px Arial,sans-serif;margin:1mm 0 4mm}.course{font-size:22px;font-weight:bold;margin:4mm 0}.score{font:700 17px Arial,sans-serif;margin:3mm 0}.date{font:13px Arial,sans-serif;margin:3mm 0}.note{font:10px Arial,sans-serif;color:#555;margin-top:4mm;max-width:90%;line-height:1.4}@media print{body{background:white}.toolbar{display:none}.sheet{margin:0;box-shadow:none;width:297mm;height:210mm;padding:10mm}.frame{padding:4mm}.inner{padding:6mm 12mm}}@media screen and (max-width:1100px){.sheet{transform-origin:top left;max-width:none}}
</style></head><body><div class="toolbar"><button onclick="window.print()">Print / Save as PDF · Cetak / Simpan PDF</button></div><main class="sheet"><div class="frame"><div class="inner"><div class="ornament">✦ ◆ ✦</div><div class="eyebrow">E-LEARNING TVET · PROGRAMMING FUNDAMENTALS</div><h1 class="title">Certificate of Achievement</h1><p class="sub">Sijil Pencapaian</p><p class="lead">This is to certify that / Dengan ini diperakui bahawa</p><div class="name">${safeName}</div><p class="ic">Identity Card No. / No. Kad Pengenalan: <b>${safeIC}</b></p><p class="lead">has successfully passed the final assessment for / telah berjaya lulus penilaian akhir bagi</p><div class="course">Programming Fundamentals (C++)</div><div class="score">${score}/30 · ${percent}% · PASS / LULUS</div><div class="date">Date / Tarikh: ${date}</div><div class="note">Self-generated learning certificate based on the browser assessment; identity and result are not independently verified.<br>Sijil pembelajaran yang dijana sendiri berdasarkan penilaian dalam pelayar; identiti dan keputusan tidak disahkan secara bebas.</div></div></div></main></body></html>`);
        popup.document.close();
        popup.focus();
      };
    }

    if(!pass){
      const area=document.createElement('section');area.className='task';area.innerHTML=`<h3>Save Result / Simpan Keputusan</h3><p>Save the result on this device. / Simpan keputusan pada peranti ini.</p><p>Student ID / No. Matrik <input id="failId" maxlength="30" style="padding:10px;width:100%;max-width:400px"></p><p>Full Name / Nama Penuh <input id="failName" maxlength="100" style="padding:10px;width:100%;max-width:400px"></p><button class="secondary" type="button" id="saveFail" hidden>Save Result / Simpan Keputusan</button>`;$('finalResult').appendChild(area);
      $('saveFail').onclick=()=>{
        const studentId=$('failId').value.trim(),name=$('failName').value.trim();
        if(!/^[a-zA-Z0-9_\/-]{2,30}$/.test(studentId)||!name){alert('Enter student ID and name. / Masukkan nombor matrik dan nama.');return;}
        const rows=readStudentRecords(),record={studentId,name,score,percent,status:'FAIL / GAGAL',date:new Date().toISOString().slice(0,10)};
        const pos=rows.findIndex(r=>r.studentId.toLowerCase()===studentId.toLowerCase());
        if(pos>=0){if(!confirm('Replace previous result? / Gantikan keputusan lama?'))return;rows[pos]=record;}else rows.push(record);
        try{localStorage.setItem('pf-student-records-v1',JSON.stringify(rows));alert('Result saved. / Keputusan disimpan.');}catch(e){alert('Unable to save. / Gagal menyimpan.');}
      };
    }
    $('finalResult').scrollIntoView({behavior:'smooth',block:'start'});
  };
  window.scrollTo(0,0);
}


// Local-only student records. No IC numbers are saved or exported.
function readStudentRecords(){
  try{const rows=JSON.parse(localStorage.getItem('pf-student-records-v1')||'[]');return Array.isArray(rows)?rows.filter(r=>r&&typeof r.studentId==='string'&&typeof r.name==='string'&&Number.isFinite(r.score)):[];}
  catch(e){return [];}
}
function csvCell(value){const s=String(value??'');return '"'+s.replaceAll('"','""')+'"';}
function exportStudentRecords(){
  const rows=readStudentRecords();
  if(!rows.length){alert('No records to export. / Tiada rekod untuk dieksport.');return;}
  const header=['Student ID / No. Matrik','Full Name / Nama Penuh','Score / Markah','Percentage / Peratus (%)','Status','Date / Tarikh'];
  const lines=[header,...rows.map(r=>[r.studentId,r.name,r.score,r.percent,r.status,r.date])];
  // Prefix untrusted spreadsheet strings to prevent CSV formula execution in Excel.
  const safe=(v)=>{let s=String(v??'');if(/^[\s]*[=+@\-\t\r]/.test(s))s="'"+s;return csvCell(s);};
  const csv='\uFEFF'+lines.map(row=>row.map(safe).join(',')).join('\r\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
  const link=document.createElement('a');link.href=url;link.download='rekod-pencapaian-pelajar.csv';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);
}
function showStudentRecords(){
    
  home();
  return;

  selected=-3;nav();const rows=readStudentRecords();
  const passed=rows.filter(r=>r.score>=18).length;
  const avg=rows.length?(rows.reduce((a,r)=>a+r.percent,0)/rows.length).toFixed(1):'—';
  $('content').innerHTML=`<div class="eyebrow">STUDENT RECORDS / REKOD PELAJAR</div><h1>Student Achievement Records / Rekod Pencapaian Pelajar</h1><p><b>Important / Penting:</b> These records exist only in this browser on this device. They are not collected automatically from students' devices. / Rekod ini hanya wujud dalam pelayar dan peranti ini, bukan dikumpul secara automatik daripada peranti pelajar.</p><p><b>${rows.length}</b> records / rekod · <b>${passed}</b> passed / lulus · Average / Purata: <b>${avg}%</b></p><div style="display:flex;gap:10px;flex-wrap:wrap;margin:16px 0"><button class="primary" id="exportRecords">Export CSV for Excel / Eksport CSV untuk Excel</button><button class="secondary" id="backRecords">← Dashboard</button><button class="secondary" id="clearRecords">Clear Records / Padam Rekod</button></div><div style="overflow-x:auto"><table class="ipo"><thead><tr><th>No.</th><th>Student ID / No. Matrik</th><th>Full Name / Nama</th><th>Score / Markah</th><th>Percentage / Peratus</th><th>Status</th><th>Date / Tarikh</th></tr></thead><tbody>${rows.length?rows.map((r,i)=>`<tr><td>${i+1}</td><td>${escapeHtml(r.studentId)}</td><td>${escapeHtml(r.name)}</td><td>${r.score}/30</td><td>${r.percent}%</td><td>${escapeHtml(r.status)}</td><td>${escapeHtml(r.date)}</td></tr>`).join(''):'<tr><td colspan="7">No records saved yet. / Belum ada rekod disimpan.</td></tr>'}</tbody></table></div><p class="note">For class-wide records, each student must export or submit their result separately; this static GitHub Pages site has no shared database. / Untuk rekod seluruh kelas, pelajar perlu menyerahkan keputusan secara berasingan kerana laman GitHub Pages ini tiada pangkalan data bersama.</p>`;
  $('exportRecords').onclick=exportStudentRecords;
  $('backRecords').onclick=home;
  $('clearRecords').onclick=()=>{if(confirm('Delete ALL saved records on this browser? / Padam SEMUA rekod yang disimpan dalam pelayar ini?')){localStorage.removeItem('pf-student-records-v1');showStudentRecords();}};
  window.scrollTo(0,0);
}

$('home').onclick=home;home();
