import React from "react";

function PortfolioShow() {
  return (
    <div className=" grid grid-cols-2 mt-4 gap-4">
      <div className=" bg-black p-4 w-full justify-between flex flex-row rounded-md">
        <div className=" py-4 px-2">
          <p className=" text-xl font-semibold">Your Portfolio Balance</p>
          <p className=" text-2xl mt-6 ">
            $179,626 <span className=" text-lg text-red-600">23%</span>
          </p>
          <p className=" text-gray-300 text-xs ">Overall balance</p>
          <div className=" flex uppercase mt-8 space-x-4">
            <button className=" bg-pink-800 py-1 font=semibold px-4 uppercase ">
              Deposit
            </button>
            <button className=" py-1 px-4 uppercase font-semibold border">
              Withdraw
            </button>
          </div>
          <p className=" text-blue-600 uppercase mt-8">+Add Wallet</p>
        </div>
        <div className=" pr-6 w-1/2">
          <p className=" pt-10 text-xl">Portfolio Distribution</p>
          <p className=" pt-4 font-semibold">
            BTC |
            <span className=" text-xs font-normal text-gray-400"> 8.75 </span>
          </p>
          <div className="pt-1 bg-gradient-to-l w-[74%]  from-yellow-500 via-green-400 to-green-600 mt-2" />
          <p className=" pt-4 font-semibold">
            RPL |
            <span className=" text-xs font-normal text-gray-400"> 1.23</span>
          </p>
          <div className="pt-1 bg-red-500  w-[18%] mt-2" />
          <p className=" pt-4 font-semibold">
            LTE |
            <span className=" text-xs font-normal text-gray-400"> 0.71</span>
          </p>
          <div className="pt-1 bg-pink-700 w-[8%] mt-2" />
        </div>
      </div>
      <div className=" bg-black rounded-md">
        <div className=" flex flex-row p-6 justify-between">
          <div className=" flex flex-row space-x-4">
            <div className=" flex flex-col">
              <p className=" text-2xl font-semibold">$2,95,400</p>{" "}
              <p className=" text-sm font-light text-gray-400">
                Earning this year
              </p>
            </div>
            <div className=" flex flex-col">
              <p className=" text-2xl font-semibold">$58,000</p>{" "}
              <p className=" text-sm font-light text-gray-400">
                Available in account
              </p>
            </div>
          </div>
          <div className=" flex flex-row space-x-5">
            <button className=" text-blue-500 uppercase border-b border-blue-500 py-2 px-1">
              Earning
            </button>
            <button className=" py-2 px-4 uppercase">Expense</button>
          </div>
        </div>
        <div className=" w-full">
            <svg className="recharts-surface w-full" viewBox="0 0 812 205" version="1.1"><defs><clipPath id="recharts20-clip"><rect x="20" y="0" height="175" width="772"></rect></clipPath></defs><g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"><g class="recharts-cartesian-axis-ticks"><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="20" y1="181" x2="20" y2="175"></line><text width="772" height="30" x="20" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="20" dy="0.71em">Jan</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="90.18181818181819" y1="181" x2="90.18181818181819" y2="175"></line><text width="772" height="30" x="90.18181818181819" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="90.18181818181819" dy="0.71em">Feb</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="160.36363636363637" y1="181" x2="160.36363636363637" y2="175"></line><text width="772" height="30" x="160.36363636363637" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="160.36363636363637" dy="0.71em">Mar</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="230.54545454545456" y1="181" x2="230.54545454545456" y2="175"></line><text width="772" height="30" x="230.54545454545456" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="230.54545454545456" dy="0.71em">Apr</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="300.72727272727275" y1="181" x2="300.72727272727275" y2="175"></line><text width="772" height="30" x="300.72727272727275" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="300.72727272727275" dy="0.71em">May</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="370.90909090909093" y1="181" x2="370.90909090909093" y2="175"></line><text width="772" height="30" x="370.90909090909093" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="370.90909090909093" dy="0.71em">Jun</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="441.0909090909091" y1="181" x2="441.0909090909091" y2="175"></line><text width="772" height="30" x="441.0909090909091" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="441.0909090909091" dy="0.71em">Jul</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="511.2727272727273" y1="181" x2="511.2727272727273" y2="175"></line><text width="772" height="30" x="511.2727272727273" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="511.2727272727273" dy="0.71em">Aug</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="581.4545454545455" y1="181" x2="581.4545454545455" y2="175"></line><text width="772" height="30" x="581.4545454545455" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="581.4545454545455" dy="0.71em">Sep</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="651.6363636363637" y1="181" x2="651.6363636363637" y2="175"></line><text width="772" height="30" x="651.6363636363637" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="651.6363636363637" dy="0.71em">Oct</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="721.8181818181819" y1="181" x2="721.8181818181819" y2="175"></line><text width="772" height="30" x="721.8181818181819" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="721.8181818181819" dy="0.71em">Nov</tspan></text></g><g class="recharts-layer recharts-cartesian-axis-tick"><line class="recharts-cartesian-axis-tick-line" width="772" height="30" x="20" y="175" stroke="#666" fill="none" x1="792" y1="181" x2="792" y2="175"></line><text width="772" height="30" x="792" y="183" stroke="none" fill="#666" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle"><tspan x="792" dy="0.71em">Dec</tspan></text></g></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer"><defs><clipPath id="animationClipPath-recharts-area-21"><rect x="20" y="0" width="772" height="176"></rect></clipPath></defs><g class="recharts-layer" clip-path="url(#animationClipPath-recharts-area-21)"><g class="recharts-layer"><path stroke="none" fill-opacity="1" fill="#FF8C00" width="772" height="175" class="recharts-curve recharts-area-area" d="M20,151.13636363636363L90.18181818181819,127.27272727272728L160.36363636363637,95.45454545454545L230.54545454545456,143.18181818181816L300.72727272727275,159.0909090909091L370.90909090909093,87.5L441.0909090909091,63.63636363636364L511.2727272727273,39.77272727272727L581.4545454545455,15.909090909090914L651.6363636363637,143.18181818181816L721.8181818181819,119.31818181818183L792,7.954545454545448L792,175L721.8181818181819,175L651.6363636363637,175L581.4545454545455,175L511.2727272727273,175L441.0909090909091,175L370.90909090909093,175L300.72727272727275,175L230.54545454545456,175L160.36363636363637,175L90.18181818181819,175L20,175Z"></path><path stroke="#FF8C00" fill-opacity="1" fill="none" width="772" height="175" class="recharts-curve recharts-area-curve" d="M20,151.13636363636363L90.18181818181819,127.27272727272728L160.36363636363637,95.45454545454545L230.54545454545456,143.18181818181816L300.72727272727275,159.0909090909091L370.90909090909093,87.5L441.0909090909091,63.63636363636364L511.2727272727273,39.77272727272727L581.4545454545455,15.909090909090914L651.6363636363637,143.18181818181816L721.8181818181819,119.31818181818183L792,7.954545454545448"></path></g></g></g></g><g class="recharts-layer recharts-area"><g class="recharts-layer"><defs><clipPath id="animationClipPath-recharts-area-22"><rect x="20" y="0" width="772" height="176"></rect></clipPath></defs><g class="recharts-layer" clip-path="url(#animationClipPath-recharts-area-22)"><g class="recharts-layer"><path stroke="none" fill-opacity="1" fill="#5F33C2" width="772" height="175" class="recharts-curve recharts-area-area" d="M20,135.22727272727272L90.18181818181819,95.45454545454545L160.36363636363637,55.681818181818194L230.54545454545456,103.40909090909089L300.72727272727275,159.0909090909091L370.90909090909093,135.22727272727272L441.0909090909091,111.36363636363636L511.2727272727273,63.63636363636364L581.4545454545455,15.909090909090914L651.6363636363637,71.59090909090908L721.8181818181819,119.31818181818183L792,71.59090909090908L792,175L721.8181818181819,175L651.6363636363637,175L581.4545454545455,175L511.2727272727273,175L441.0909090909091,175L370.90909090909093,175L300.72727272727275,175L230.54545454545456,175L160.36363636363637,175L90.18181818181819,175L20,175Z"></path><path stroke="#5F33C2" fill-opacity="1" fill="none" width="772" height="175" class="recharts-curve recharts-area-curve" d="M20,135.22727272727272L90.18181818181819,95.45454545454545L160.36363636363637,55.681818181818194L230.54545454545456,103.40909090909089L300.72727272727275,159.0909090909091L370.90909090909093,135.22727272727272L441.0909090909091,111.36363636363636L511.2727272727273,63.63636363636364L581.4545454545455,15.909090909090914L651.6363636363637,71.59090909090908L721.8181818181819,119.31818181818183L792,71.59090909090908"></path></g></g></g></g></svg>

        </div>
      </div>
    </div>
  );
}

export default PortfolioShow;
