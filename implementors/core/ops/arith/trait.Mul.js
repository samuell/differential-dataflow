(function() {var implementors = {};
implementors["differential_dataflow"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, R1:&nbsp;<a class=\"trait\" href=\"differential_dataflow/difference/trait.Diff.html\" title=\"trait differential_dataflow::difference::Diff\">Diff</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt;, R2:&nbsp;<a class=\"trait\" href=\"differential_dataflow/difference/trait.Diff.html\" title=\"trait differential_dataflow::difference::Diff\">Diff</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt; for <a class=\"struct\" href=\"differential_dataflow/difference/struct.DiffPair.html\" title=\"struct differential_dataflow::difference::DiffPair\">DiffPair</a>&lt;R1, R2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R1 as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html#associatedtype.Output\" title=\"type core::ops::arith::Mul::Output\">Output</a>: <a class=\"trait\" href=\"differential_dataflow/difference/trait.Diff.html\" title=\"trait differential_dataflow::difference::Diff\">Diff</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R2 as <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T&gt;&gt;::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html#associatedtype.Output\" title=\"type core::ops::arith::Mul::Output\">Output</a>: <a class=\"trait\" href=\"differential_dataflow/difference/trait.Diff.html\" title=\"trait differential_dataflow::difference::Diff\">Diff</a>,&nbsp;</span>",synthetic:false,types:["differential_dataflow::difference::DiffPair"]},];
implementors["time"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"time/struct.Duration.html\" title=\"struct time::Duration\">Duration</a>",synthetic:false,types:["time::duration::Duration"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
