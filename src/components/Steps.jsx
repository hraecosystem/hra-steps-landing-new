import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const HRA_GREEN = "#92E3A9";
const DEEP_GREEN = "#588567ff";

const formatNumber = (n) => new Intl.NumberFormat("en-US").format(n);

/* ---------- helper ---------- */
const roundTo = (n, d = 0) => {
  const p = Math.pow(10, d);
  return Math.round(n * p) / p;
};

/* ---------- UPDATED: count-up animates from previous value instead of 0 ---------- */
function useCountUp(target, durationMs = 1400, start = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startTsRef = useRef(null);
  const fromRef = useRef(0);

  useEffect(() => {
    if (!start) return;

    // SSR-safe + reduced motion
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || durationMs <= 0) {
      setValue(target);
      fromRef.current = target;
      return;
    }

    const from = fromRef.current;
    const delta = target - from;

    // If the target has decimals, keep 2; otherwise 0
    const decimals = Number.isInteger(target) ? 0 : 2;

    const tick = (ts) => {
      if (startTsRef.current == null) startTsRef.current = ts;
      const elapsed = ts - startTsRef.current;
      const p = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const next = roundTo(from + delta * eased, decimals);
      setValue(next);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = target;
        startTsRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startTsRef.current = null;
    };
  }, [target, durationMs, start]);

  return value;
}

/* ---------- unchanged ---------- */
function useInView(opts) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.15, ...(opts || {}) }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [opts]);

  return { ref, inView };
}

/* ---------- NEW: live, persistent targets (uses localStorage) ---------- */
function useLiveTargets() {
  const [targets, setTargets] = useState({
    steps: 2430000,
    eur: 1300,
    challenges: 360,
    distance: 1852,
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard
    const key = "hraStepsStartTime";
    let startTime = Number(localStorage.getItem(key));
    if (!startTime) {
      startTime = Date.now();
      localStorage.setItem(key, String(startTime));
    }

    const update = () => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000); // seconds

      // Steps: +2 every 2 sec
      const steps = 2430000 + Math.floor(elapsed / 2) * 2;

      // Euros: +0.10 every 60 sec (discrete minutes)
      const eur = roundTo(1300 + Math.floor(elapsed / 60) * 0.1, 2);

      // Challenges: +10 every 3600 sec
      const challenges = 360 + Math.floor(elapsed / 3600) * 10;

      // Distance: +2.52 km every 3600 sec
      const distance = roundTo(1852 + Math.floor(elapsed / 3600) * 2.52, 2);

      setTargets({ steps, eur, challenges, distance });
    };

    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return targets;
}

/* ---------- your icons (unchanged) ---------- */
const IconFootsteps = () => (
  <svg id="Sneakers-Footware-Shoe--Streamline-Atlas" xmlns="http://www.w3.org/2000/svg" viewBox="-0.75 -0.75 24 24" height="24" width="24">
    <desc> Sneakers Footware Shoe Streamline Icon: https://streamlinehq.com </desc>
    <defs></defs>
    <path d="M19.303125 21.09375h-5.371875L2.0812500000000003 10.0875a2.109375 2.109375 0 0 1 -0.6749999999999999 -1.546875 2.1374999999999997 2.1374999999999997 0 0 1 0.61875 -1.490625L7.303125 1.78125a1.2281250000000001 1.2281250000000001 0 0 1 0.9375 -0.375 1.25625 1.25625 0 0 1 1.265625 1.265625 1.2281250000000001 1.2281250000000001 0 0 0 0.375 0.890625l0.7406250000000001 0.75a5.371875 5.371875 0 0 0 3.796875 1.5656249999999998h1.3499999999999999l1.359375 4.7625a2.7281250000000004 2.7281250000000004 0 0 0 1.9593749999999999 1.875 2.709375 2.709375 0 0 1 2.053125 2.634375v4.14375a1.78125 1.78125 0 0 1 -1.8375 1.7999999999999998Z" fill="none" stroke="#669f76" strokeMiterlimit="10" strokeWidth="1.5"></path>
    <path d="m21.09375 17.5125 -5.371875 0L3.1968750000000004 5.878125" fill="none" stroke="#669f76" strokeMiterlimit="10" strokeWidth="1.5"></path>
    <path d="m15.721874999999999 4.987500000000001 0 -1.790625" fill="none" stroke="#669f76" strokeMiterlimit="10" strokeWidth="1.5"></path>
    <path d="m13.931249999999999 8.568750000000001 2.6906250000000003 0" fill="none" stroke="#669f76" strokeMiterlimit="10" strokeWidth="1.5"></path>
    <path d="m14.83125 12.140625 3.58125 0" fill="none" stroke="#669f76" strokeMiterlimit="10" strokeWidth="1.5"></path>
  </svg>
);

const IconEuro = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Currency-Euro-2-Line--Streamline-Mingcute" height="24" width="24">
    <desc> Currency Euro 2 Line Streamline Icon: https://streamlinehq.com </desc>
    <g fill="none" fillRule="nonzero">
      <path d="M24 0v24H0V0zM12.593 23.258l-0.011 0.002 -0.071 0.035 -0.02 0.004 -0.014 -0.004 -0.071 -0.035c-0.01 -0.004 -0.019 -0.001 -0.024 0.005l-0.004 0.01 -0.017 0.428 0.005 0.02 0.01 0.013 0.104 0.074 0.015 0.004 0.012 -0.004 0.104 -0.074 0.012 -0.016 0.004 -0.017 -0.017 -0.427c-0.002 -0.01 -0.009 -0.017 -0.017 -0.018m0.265 -0.113 -0.013 0.002 -0.185 0.093 -0.01 0.01 -0.003 0.011 0.018 0.43 0.005 0.012 0.008 0.007 0.201 0.093c0.012 0.004 0.023 0 0.029 -0.008l0.004 -0.014 -0.034 -0.614c-0.003 -0.012 -0.01 -0.02 -0.02 -0.022m-0.715 0.002a0.023 0.023 0 0 0 -0.027 0.006l-0.006 0.014 -0.034 0.614c0 0.012 0.007 0.02 0.017 0.024l0.015 -0.002 0.201 -0.093 0.01 -0.008 0.004 -0.011 0.017 -0.43 -0.003 -0.012 -0.01 -0.01z" strokeWidth="1"></path>
      <path fill="#669f76" d="M8.73 9c0.958 -1.813 2.752 -3 4.741 -3 1.465 0 2.807 0.632 3.802 1.686a1 1 0 0 0 1.454 -1.372C17.387 4.894 15.533 4 13.471 4c-3.179 0 -5.827 2.097 -6.926 5H5a1 1 0 0 0 0 2h1.058a8.681 8.681 0 0 0 0 2H5a1 1 0 1 0 0 2h1.545c1.099 2.903 3.747 5 6.926 5 2.062 0 3.917 -0.894 5.256 -2.314a1 1 0 0 0 -1.454 -1.372C16.278 17.368 14.936 18 13.47 18c-1.989 0 -3.783 -1.187 -4.741 -3H13a1 1 0 1 0 0 -2H8.075a6.815 6.815 0 0 1 0 -2H13a1 1 0 1 0 0 -2z" strokeWidth="1"></path>
    </g>
  </svg>
);

const IconTrophy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.75 -0.75 24 24" id="Star-Medal-Award--Streamline-Atlas" height="24" width="24">
    <desc> Star Medal Award Streamline Icon: https://streamlinehq.com </desc>
    <path stroke="#669f76" strokeMiterlimit="10" d="m9.286021875 0.3515625 2.946384375 9.8214375H7.321734375L4.375303125 0.3515625" strokeWidth="1.5"></path>
    <path stroke="#669f76" strokeMiterlimit="10" d="m18.12571875 0.3515625 -2.94646875 9.8214375h-4.91071875" strokeWidth="1.5"></path>
    <path stroke="#669f76" strokeMiterlimit="10" d="M13.21425 0.3515625 11.25 6.90245625" strokeWidth="1.5"></path>
    <path stroke="#669f76" strokeMiterlimit="10" d="m11.251031249999999 10.92084375 1.55175 3.23128125 3.457125 0.5205000000000001 -2.5044375000000003 2.5142812500000002 0.5893125 3.555375 -3.09375 -1.6794375000000001 -3.0937875 1.6794375000000001 0.589284375 -3.555375 -2.504465625 -2.5142812500000002 3.457125 -0.5205000000000001 1.55184375 -3.23128125Z" strokeWidth="1.5"></path>
  </svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Earth--Streamline-Ionic-Filled" height="24" width="24">
    <desc> Earth Streamline Icon: https://streamlinehq.com </desc>
    <path fill="#669f76" d="M20.2866 3.71335c-1.08625 -1.097 -2.37855 -1.9686 -3.8027 -2.56465 -1.4242 -0.59605 -2.952 -0.90485 -4.4958 -0.90865 -1.5439 -0.0038 -3.07325 0.29745 -4.5003 0.8865 -1.42705 0.58905 -2.72365 1.45425 -3.81535 2.54595 -1.09165 1.09165 -1.95685 2.38825 -2.5459 3.8153C0.5375 8.91485 0.23625 10.4442 0.24005 11.9881c0.0038 1.5438 0.3126 3.0716 0.90865 4.4958 0.59605 1.42415 1.46765 2.71645 2.56465 3.8027 1.0863 1.09705 2.3786 1.96865 3.8028 2.5647 1.42405 0.59605 2.952 0.90485 4.4958 0.90865 1.54385 0.0038 3.07325 -0.2975 4.50025 -0.88655 1.4271 -0.589 2.72365 -1.4542 3.81535 -2.5459 1.09165 -1.0916 1.95685 -2.3882 2.5459 -3.8153 0.589 -1.42705 0.8903 -2.9564 0.8865 -4.50025 -0.00375 -1.5438 -0.3126 -3.07175 -0.9087 -4.4959 -0.596 -1.42405 -1.4676 -2.7164 -2.5646 -3.8027ZM1.95495 11.99995c-0.00035 -0.889 0.1175 -1.77415 0.35055 -2.6321 0.384 0.82665 0.9417 1.5408 1.321 2.38885 0.4902 1.0903 1.80655 0.78795 2.38775 1.74325 0.5159 0.84805 -0.035 1.92055 0.3511 2.8079 0.28045 0.64405 0.94175 0.7848 1.39795 1.25565 0.46615 0.475 0.45615 1.1259 0.5273 1.7453 0.08035 0.7278 0.2106 1.44925 0.38985 2.1592 0 0.0052 0 0.01095 0.00415 0.01615C4.7697 20.10925 1.95495 16.37745 1.95495 11.99995Zm10.045 10.0451c-0.5609 -0.0002 -1.1209 -0.0471 -1.6741 -0.1402 0.00575 -0.1418 0.00835 -0.2742 0.02245 -0.36625 0.12715 -0.83185 0.5436 -1.6454 1.1055 -2.268 0.5551 -0.6142 1.3158 -1.0296 1.78455 -1.7265 0.45935 -0.6801 0.59695 -1.59565 0.4076 -2.3904 -0.2789 -1.174 -1.87405 -1.56585 -2.73415 -2.20255 -0.49445 -0.3662 -0.93445 -0.9323 -1.5837 -0.97835 -0.29925 -0.02095 -0.54985 0.0434 -0.8465 -0.033 -0.27205 -0.0706 -0.48555 -0.21705 -0.77535 -0.1789 -0.54145 0.07115 -0.8831 0.6498 -1.4649 0.57135 -0.55195 -0.0738 -1.12065 -0.7199 -1.2462 -1.2457 -0.16115 -0.67595 0.37355 -0.89515 0.9464 -0.95535 0.23915 -0.02515 0.5075 -0.0523 0.73715 0.0356 0.3024 0.11195 0.44525 0.40805 0.7168 0.5577 0.50905 0.2794 0.61215 -0.1669 0.53415 -0.61895 -0.11665 -0.677 -0.25265 -0.9527 0.35105 -1.41885 0.41855 -0.32125 0.77645 -0.5535 0.70945 -1.1306 -0.0398 -0.33905 -0.2255 -0.49225 -0.05235 -0.82975 0.13135 -0.25685 0.49185 -0.4886 0.72675 -0.6419 0.6063 -0.3956 2.59755 -0.3663 1.784 -1.4733 -0.23905 -0.3249 -0.6801 -0.9056 -1.09865 -0.98515 -0.5232 -0.09885 -0.75545 0.485 -1.12015 0.7424 -0.3767 0.2663 -1.11015 0.5687 -1.48735 0.15695 -0.5075 -0.55405 0.3364 -0.7356 0.5231 -1.12275 0.08635 -0.1805 0 -0.4311 -0.1454 -0.66705 0.18875 -0.0795 0.38055 -0.1533 0.5755 -0.2213 0.12225 0.09025 0.2671 0.1446 0.4185 0.15695 0.35005 0.02305 0.6802 -0.16635 0.98575 0.0722 0.339 0.2616 0.5833 0.59225 1.03325 0.67385 0.4353 0.079 0.8962 -0.17475 1.00395 -0.62045 0.0654 -0.27105 0 -0.5572 -0.0628 -0.8371 1.95675 0.01125 3.867 0.59725 5.49345 1.68515 -0.10465 -0.03975 -0.2297 -0.03505 -0.38405 0.0366 -0.31755 0.14755 -0.76745 0.5232 -0.80465 0.8957 -0.04235 0.42275 0.58125 0.48235 0.8774 0.48235 0.44465 0 0.89515 -0.1988 0.75175 -0.71255 -0.0622 -0.2229 -0.14695 -0.45465 -0.28355 -0.59485 0.32825 0.2278 0.64275 0.47475 0.94175 0.7398 -0.0047 0.00465 -0.00945 0.00885 -0.0141 0.0141 -0.30135 0.3139 -0.6514 0.5624 -0.85755 0.9443 -0.1454 0.26895 -0.30915 0.3966 -0.6037 0.46615 -0.1622 0.0382 -0.3474 0.05235 -0.48345 0.16115 -0.37875 0.29825 -0.16325 1.01495 0.1957 1.23 0.4536 0.27155 1.1264 0.14385 1.46855 -0.24375 0.2673 -0.3035 0.4248 -0.8303 0.90565 -0.8298 0.21165 -0.0004 0.415 0.0824 0.56605 0.2307 0.1988 0.20615 0.1596 0.3987 0.20195 0.65605 0.07485 0.4573 0.4782 0.2093 0.7236 -0.0214 0.17885 0.3183 0.34025 0.6461 0.4834 0.982 -0.27 0.3887 -0.4845 0.8125 -1.13375 0.3594 -0.38875 -0.2715 -0.6278 -0.6655 -1.11595 -0.7879 -0.4264 -0.1046 -0.86325 0.0042 -1.2844 0.0769 -0.4787 0.08315 -1.04635 0.11985 -1.40945 0.48235 -0.35105 0.3495 -0.5368 0.81725 -0.91035 1.16825 -0.72245 0.6802 -1.0275 1.4226 -0.5598 2.3842 0.44995 0.9244 1.39115 1.42615 2.40665 1.3602 0.9977 -0.0664 2.0341 -0.64505 2.00535 0.8047 -0.0105 0.51325 0.0968 0.86845 0.25425 1.3451 0.14595 0.43945 0.136 0.8653 0.1695 1.3189 0.03185 0.5312 0.1149 1.05805 0.248 1.5732 -0.93775 1.2074 -2.139 2.1845 -3.51215 2.8567C15.0373 21.6955 13.5288 22.045 12 22.04505Z" strokeWidth="0.5"></path>
  </svg>
);

/* ---------- YOUR COMPONENT ---------- */
export default function Steps() {
  // live targets that keep increasing across reloads/days
  const { steps, eur, challenges, distance } = useLiveTargets();

  // keep your structure/classes; only targets are dynamic now
  const data = useMemo(
    () => [
      { id: "steps", icon: <IconFootsteps />, target: steps, label: "Total Steps", prefix: "", suffix: "" },
      { id: "eur", icon: <IconEuro />, target: eur, label: "Euros Earned", prefix: "€", suffix: "" },
      { id: "challenges", icon: <IconTrophy />, target: challenges, label: "Challenges Completed", prefix: "", suffix: "" },
      { id: "distance", icon: <IconGlobe />, target: distance, label: "Global Distance", prefix: "", suffix: " km" },
    ],
    [steps, eur, challenges, distance]
  );

  const { ref, inView } = useInView();

  return (
    <Section aria-labelledby="hra-stats-heading">
      <Container ref={ref}>
        <Title id="hra-stats-heading">Every Step Counts in HRA Step</Title>
        <Subtle>
          Discover the real impact of every step you take and see how our community grows together across the HRA ecosystem.
        </Subtle>
        <Grid>
          {data.map((d, i) => (
            <StatCard key={d.id} index={i} {...d} animate={inView} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

function StatCard({ id, icon, target, label, prefix = "", suffix = "", animate = false, index = 0 }) {
  const value = useCountUp(target, 1200 + index * 120, animate);
  return (
    <Card>
      <IconWrap>{icon}</IconWrap>
      <StatNumber>
        {prefix}
        {formatNumber(value)}
        {suffix}
      </StatNumber>
      <StatLabel>{label}</StatLabel>
    </Card>
  );
}

const Section = styled.section`
  position: relative;
  padding: clamp(56px, 8vw, 96px) 24px;
  background: #FFF;
  border-top: 1px solid rgba(0,0,0,0.06);
  border-bottom: 1px solid rgba(0,0,0,0.06);
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.15;
  text-align: center;
  color: #2c4433;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -0.015em;
  margin: 0 0 28px;

  //Phone
  @media (max-width: 440px) {
    font-size: 1.5rem;
    margin: 0 2rem;
  }


`;

const Subtle = styled.p`
  text-align: center;
  color: rgba(51, 38, 38, 0.66);
  margin: 0 3rem 3rem 3rem;
  font-size: 1.4rem;

  //Phone
  @media (max-width: 440px) {
    font-size: 1.1rem;
    margin: 0.8rem 1rem 2rem 1rem;
  }

    //tablet
  @media (min-width: 441px) and (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 1rem 3rem 1rem;
  }

  //Desktop
@media (min-width: 769px) and (max-width: 1439px) {
  font-size: 1.2rem;
  margin: 0 3rem 3rem 3rem;
}

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  // place-items: center;
  // justify-items: center;
  // margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: 0.fr;
  }
`;

const cardIn = keyframes`
  from { transform: translateY(8px); opacity: 0; }
  to   { transform: translateY(0);   opacity: 1; }
`;

const Card = styled.article`
  background: linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.78) 100%);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 12px;
  animation: ${cardIn} .5s ease both;
  // border: 3px solid #000;
  // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  min-width: 140px;
  // max-width: 260px;




`;

const IconWrap = styled.div`
  width: 44px; height: 44px;
  display: grid; place-items: center;
  border-radius: 12px;
  background: rgba(126, 217, 87, 0.16);
  border: 1px solid rgba(126, 217, 87, 0.35);
`;

const StatNumber = styled.div`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 800;
  color: ${DEEP_GREEN};
  letter-spacing: 0.01em;

  @media (max-width: 440px) {
    font-size: 1.15rem;
  }

`;

const StatLabel = styled.div`
  font-size: 15px;
  color: rgba(0,0,0,0.6);

  @media (max-width: 440px) {
    font-size: 01rem;
  }
`