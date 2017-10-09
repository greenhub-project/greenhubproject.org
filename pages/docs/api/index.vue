<template>
  <div class="content">
    <h1>Getting Started</h1>
    <ul class="summary">
      <li><a href="#sign-up">Sign up</a></li>
      <li>
        <a href="#api-overview">API Overview</a>
        <ul>
          <li><a href="#api-rate-limit">API Rate Limit</a></li>
        </ul>
      </li>
      <li><a href="#api-quick-reference">API Quick Reference</a></li>
    </ul>

    <h2 id="sign-up">Sign up</h2>
    <hr>
    <p>In order to start using the GreenHub API, first you will need to create an account in our GreenHub Farmer web app.</p>
    <ol>
      <li>Head over to <a href="https://greenhub.di.ubi.pt/register" target="_blank">https://greenhub.di.ubi.pt/register</a>.</li>
      <li>Fill the necessary fields to complete the registration process.</li>
      <li>After you create your account, it will be necessary to verify your email address.</li>
      <li>So check your inbox, and follow the email instructions you just got.</li>
      <li>You should be redirected to the GreenHub Farmer homepage and you should see an alert saying that you are now verified!</li>
    </ol>
    <p>You can now login with your credentials and use the web app at <a href="https://greenhub.di.ubi.pt/login" target="_blank">https://greenhub.di.ubi.pt/login</a>.</p>
    <p>That's it! It will only takes a couple of minutes to create an account.</p>

    <h2 id="api-overview">API Overview</h2>
    <hr>
    <p>The base url for the API is:</p>
    <pre>https://greenhub.di.ubi.pt/api/</pre>
    <p>Before start using the API, be sure to understand our privacy policy. You can read it <nuxt-link to="/privacy">here</nuxt-link>.</p>

    <h3 id="api-rate-limit">API Rate Limits</h3>
    <p>Rate limiting of the API is primarily on a per-user basis — or more accurately described, per user access token. It allows 60 requests per minute per access token.</p>
    <p>When an application exceeds the rate limit for a given API endpoint, the API will return a <a href="http://tools.ietf.org/html/rfc6585">HTTP 429 "Too Many Requests"</a> response code.</p>


    <h2 id="api-quick-reference">API Quick Reference</h2>
    <hr>
    <p>All parameters are enclosed by curly brackets, e.g. <code>{parameterName}</code> it should be replace with paramater value.</p>
    <p>Below are listed all endpoints available, you can find more detailed information in other sections of this documentation. This is simply a quick reference:</p>
    <table class="table is-striped">
      <thead>
        <th>Method</th>
        <th>URI</th>
        <th>Parameters values</th>
        <th>Authentication</th>
      </thead>
      <tbody>
        <tr>
          <td>GET</td>
          <td><code>v1/count/{model}</code></td>
          <td>devices, samples</td>
          <td><span class="tag is-success">Yes</span></td>
        </tr>
        <tr>
          <td>GET</td>
          <td><code>v1/datasets/create</code></td>
          <td>Check <nuxt-link to="/docs/api/objects/datasets">Datasets Docs</nuxt-link></td>
          <td><span class="tag is-success">Yes</span></td>
        </tr>
        <tr>
          <td>GET</td>
          <td><code>v1/datasets/{token}</code></td>
          <td>token is obtained via email</td>
          <td><span class="tag is-success">Yes</span></td>
        </tr>
        <tr>
          <td>GET</td>
          <td><code>v1/datasets/{token}/download</code></td>
          <td>token is obtained via email</td>
          <td><span class="tag is-danger">No</span></td>
        </tr>
        <tr>
          <td>GET</td>
          <td><code>v1/devices</code></td>
          <td>Check <nuxt-link to="/docs/api/objects/devices">Devices Docs</nuxt-link></td>
          <td><span class="tag is-success">Yes</span></td>
        </tr>
        <tr>
          <td>GET</td>
          <td><code>v1/samples</code></td>
          <td>Check <nuxt-link to="/docs/api/objects/samples">Samples Docs</nuxt-link></td>
          <td><span class="tag is-success">Yes</span></td>
        </tr>
        <tr>
          <td>GET</td>
          <td><code>v1/status</code></td>
          <td>None</td>
          <td><span class="tag is-danger">No</span></td>
        </tr>
        <tr>
          <td>POST</td>
          <td><code>v1/token/new</code></td>
          <td>None</td>
          <td><span class="tag is-success">Yes</span></td>
        </tr>
        <tr>
          <td>GET</td>
          <td><code>v1/user</code></td>
          <td>None</td>
          <td><span class="tag is-success">Yes</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'docs',

  head () {
    return {
      title: 'GreenHub - API'
    }
  }
}
</script>
