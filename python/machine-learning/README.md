# **Learning Courses:**

## Machine Learning Course :brain::robot:

<br>

# Summary: :pushpin:

- [Introdução](#introdução)
    1. [Dealing with data](#1-dealing-with-data)
    2. [Statistics and Probability](#2-statistics-and-probability)
        - [Types of data](#types-of-data)
        - [Medidas de tendência dentrais](#medidas-de-tendência-centrais)
        - [Medidas de dispersão](#medidas-de-dispersão)

# **Introdução**:
[:top: ***Voltar ao topo***](#learning-courses)

## 1. **Dealing with data**:
- **Pandas**: Load, manipulate and clean it up. [Check notebook...](./1-intro-pandas-numpy.ipynb)
- **NumPy**: translated from Pandas to store data (multi-dimensional array objects) that facilitates high performance.
- **Scikut_Learn**: machine learning library, to deal with the data.

## 2. **Statistics**:
Always important to know what type of data you're dealing with.

- ### **Types of Data:**
    - **Numerical**: represents some sort of quantitive measurement
        - **Discrete Data**: Integer; often counts of some event. (How many times did i flip heads?).
        - **Continuous Data**: Double (infinite number of possibilities). (How much rain fell on a given day?)
    - **Categorical**: qualitative data that has no inherent mathematical meaning. (Gender, Yes/no - binary data, residence, product category, political party, etc.).
    You can assign numbers to categories in order to represent them more compactly, but **the numbers don't have mathematical meaning.**
    - **Ordinal**: mixture of numerical and categorical data (categorical that has mathematical meaning). (Movies rating on a 1-5 scale. Ratings must be 1, 2, 3, 4, or 5. But these values have mathematical meaning; 1 means it's a worse movie than 2). Categories that have a numerical relationship to each other.

<br>

- ### **Medidas de tendência centrais**:
    - **Avarage**:
        - Sum(values) / number of samples
    - **Median**:
        - Sort values and take the value at the midpoint (or the avarage of the midpoints).
        - Outliers can induce the Median to be different from the Avarage.
    - **Mode**:
        - The most common value in a data set.
            - Not relevant to continuous numerical data
    
    - [Check notebook..](./2-avg-median-mode.ipynb)

<br>

- ### **Medidas de Dispersão**:
    - **Standard**: measures how "spread out" the data set is.
        - avarage of the squared differences from the mean.
            1. the differences are calculated for eache event.
            2. then we take de avarage of the squared differences (we make it squared so that we don't work with negative number when taking the avarage after squaring it).
    - **Standard deviation**: the square root of the variance
        - usually used as a way to identify outliers. Data points that lie more than one standard deviation from the mean can be considered unusual.
        - you can talk about how extreme a data point (event) is by talking about "how many sigmas" away from the mean it is.
    - **Population vs Sample**: 
        - **Sample variance**: if you're talking about working with a sample of data instead of the entire data set (the entire population)...
            - (N - 1)
        - **Population variance**: entire population, sample, data set, etc.
            - (N)

<br>

## **3.  Probability:**

- ### **Density Function; Probability Mass Function:**


***

<br>

### **Please, be welcome to check my profile:**

<br>

<a href="https://github.com/DanScherr">
    <img src="./images/the-end-img.png" width="50%">
</a>